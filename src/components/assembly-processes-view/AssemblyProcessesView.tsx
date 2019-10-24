import * as React from 'react';
import styled from 'styled-components';
import { Filters } from '../filters/Filters';
import { AssemblyProcessItem } from '../../services/api';
import { Layout } from '../layout/Layout';
import { PageHeader } from './PageHeader/PageHeader';
import { State } from '../toggle/Toggle';
import { assemblyFilter, reviewFilter } from '../../services/filters';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { getDynamicItems } from './getDynamicItems';
import { Cards } from './Cards';


const StyledFilters = styled(Filters)`
    position: sticky;
    top: 20px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    width: 240px;
`;

const Content = styled.div`
    box-sizing: border-box;
    padding: 0 96px 0 48px;
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 240px);
`;


export type AssemblyProcessesViewProps = React.HTMLAttributes<HTMLDivElement> & {}

const priorities: [State, State] = [
    { id: 'updated', title: 'Latest first' },
    { id: 'age', title: 'Old first' },
];

export const AssemblyProcessesView: React.FC<AssemblyProcessesViewProps> =
    ({ ...attrs }) => {
        React.useEffect(() => {
            const subscription = fromEvent(window, 'scroll').pipe(
                debounceTime(1000)
            ).subscribe(() => {

            });
            return () => subscription.unsubscribe();
        }, []);

        const [searchQuery, setSearchQuery] = React.useState('');

        const [activeOptions, setActiveOptions] = React.useState({
            [assemblyFilter.id]: assemblyFilter.items[0].value,
            [reviewFilter.id]: reviewFilter.items[0].value,
        });

        const handleOnSelectFilter = (prop: string, option: string) => {
            setActiveOptions({ ...activeOptions, [prop]: option });
        };

        const [priority, setPriority] = React.useState<string>(priorities[0].id);
        const [items, setItems] = React.useState<AssemblyProcessItem[]>([]);
        const [total, setTotal] = React.useState<number>(0);
        const [start, setStart] = React.useState<number>(0);

        React.useEffect(() => {
            const subscription = getDynamicItems(
                searchQuery,
                priority,
                activeOptions[assemblyFilter.id],
                activeOptions[reviewFilter.id],
            ).subscribe(({ start, end, response: { total, items } }) => {
                console.info(`Loaded ${end - start} items (from ${start} to ${end}); total = ${total}`, items);
                setStart(start);
                setItems(items);
                setTotal(total);
            });
            return () => subscription.unsubscribe();
        }, [activeOptions, priority, searchQuery]);

        return (
            <Layout {...attrs}>

                <StyledFilters
                    title="Filter"
                    filters={[assemblyFilter, reviewFilter]}
                    activeOptions={activeOptions}
                    onSelectFilter={handleOnSelectFilter}
                />

                <Content>

                    <PageHeader
                        count={total}
                        priorities={priorities}
                        priority={priority}
                        onPriorityChange={setPriority}
                        onSearchQueryChange={setSearchQuery}
                    />

                    <Cards start={start} total={total} items={items} />

                </Content>

            </Layout>
        );
    };

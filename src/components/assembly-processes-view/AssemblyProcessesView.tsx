import * as React from 'react';
import styled from 'styled-components';
import { Filters } from '../filters/Filters';
import { Card } from '../card/Card';
import { AssemblyProcessItem } from '../../services/api';
import { Layout } from '../layout/Layout';
import { PageHeader } from './PageHeader/PageHeader';
import { State } from '../toggle/Toggle';
import { Filter } from '../../services/filtering/Filter';


const StyledFilters = styled(Filters)`
    position: sticky;
    top: 20px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    width: 240px;
`;

const StyledCard = styled(Card)`
    margin-bottom: 12px;
`;

const Content = styled.div`
    box-sizing: border-box;
    padding: 0 96px 0 48px;
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 240px);
`;


export type AssemblyProcessesViewProps = React.HTMLAttributes<HTMLDivElement> & {
    priorities: [State, State];
    priority: string;
    filters: Filter[];
    items: AssemblyProcessItem[];
    onPriorityChange(priority: State): void;
}

export const AssemblyProcessesView: React.FC<AssemblyProcessesViewProps> =
    ({ filters, priorities, priority, onPriorityChange, items, ...attrs }) => (
        <Layout {...attrs}>

            <StyledFilters title="Filter" menus={filters} />

            <Content>

                <PageHeader
                    count={220}
                    priorities={priorities}
                    priority={priority}
                    onPriorityChange={onPriorityChange}
                />

                {items.map((item) => <StyledCard key={item._id} item={item} />)}

            </Content>

        </Layout>
    );

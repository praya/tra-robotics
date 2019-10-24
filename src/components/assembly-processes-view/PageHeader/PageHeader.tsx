import * as React from 'react';
import styled from 'styled-components';
import { State, Toggle } from '../../toggle/Toggle';
import { Search } from '../../search/Search';
import { Badge } from './Badge';


const Container = styled.div`
    width: 100%;
    font-family: Roobert, sans-serif;
    white-space: nowrap;
    height: 50px;
    padding-top: 18px;
`;

const Title = styled.h1`
    display: inline-block;
    vertical-align: middle;
    margin: 1px 0 0 0;
    font-family: Roobert, sans-serif;
    font-size: 24px;
    line-height: 24px;
`;

const RightContainer = styled.div`
    float: right;
    padding: 2px 0 0 0;
`;

const ToggleLabel = styled.div`
    display: inline-block;
    vertical-align: middle;
    font-family: Lab Grotesque, sans-serif;
    font-size: 14px;
    line-height: 24px;
    opacity: 0.5;
    margin: 2px 13px 0 7px;
`;

const StyledToggle = styled(Toggle)`
    display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
`;

const StyledSearch = styled(Search)`
    display: inline-block;
    vertical-align: middle;
`;


export type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
    count: number;
    priority: string;
    priorities: [State, State];
    onPriorityChange(priority: string): void;
    onSearchQueryChange(query: string): void;
};

export const PageHeader: React.FC<PageHeaderProps> =
    ({ count, priority, priorities, onPriorityChange, onSearchQueryChange, ...attrs }) => (
        <Container {...attrs}>
            <Title>Assembly Processes</Title>
            <Badge>{count}</Badge>

            <RightContainer>
                <ToggleLabel>Show</ToggleLabel>

                <StyledToggle
                    active={priority}
                    states={priorities}
                    onStateChange={onPriorityChange}
                />

                <StyledSearch
                    onChange={({ target: { value } }) => onSearchQueryChange(value)}
                    placeholder="Search by assembly name"
                />
            </RightContainer>

        </Container>
    );

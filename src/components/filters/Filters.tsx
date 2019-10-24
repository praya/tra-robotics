import React from 'react'
import { FilterOption, PropFilter } from './prop-filter/PropFilter';
import styled from 'styled-components';


const Title = styled.div`
    font-family: Roobert, sans-serif;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    font-weight: 600;
    margin-bottom: 16px;
`;

const Container = styled.div`
    background: #f4f5f6;
    border: 1px solid #d6dadb;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px 19px;
`;

const StyledPropFilter = styled(PropFilter)`
    margin-bottom: 20px;
`;

export interface PropFilterConfig {
    id: string;
    name: string;
    items: Array<FilterOption>;
}

export type FiltersProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    filters: Array<PropFilterConfig>;
    activeOptions: { [key: string]: string };
    onSelectFilter(prop: string, selected: string): void;
}


export const Filters: React.FC<FiltersProps> = ({ title, filters, activeOptions, onSelectFilter, ...attrs }) => (
    <Container {...attrs}>

        <Title>{title}</Title>

        {filters.map((filter) => (
            <StyledPropFilter
                key={filter.id}
                title={filter.name}
                selected={activeOptions[filter.id]}
                options={filter.items}
                onSelectFilter={(option: string) => onSelectFilter(filter.id, option)}
            />
        ))}

    </Container>
);

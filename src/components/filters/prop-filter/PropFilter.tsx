import React from 'react'
import styled from 'styled-components';


const Title = styled.div`
    height: 13px;
    font-family: Lab Grotesque, sans-serif;
    font-size: 11px;
    line-height: 9px;
    margin-bottom: 10px;
    color: #98989D;
`;

const Item = styled.div<{ selected: boolean }>`
    cursor: pointer;
    height: 24px;
    margin: 8px 0 8px 1px;
    font-family: Lab Grotesque, sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: ${({ selected }) => selected ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)'};
    padding-left: 12px;
    border-left: ${({ selected }) => selected ? '1px solid #000000;' : '1px solid transparent;'};

    :hover {
        color: rgba(0, 0, 0, 0.75);
    }

    :active {
        color: rgba(0, 0, 0, 1);
    }
`;

const makeClickHandler = (item: FilterOption) => () => {
    if (item.onClick) {
        item.onClick(item);
    }
};

export interface FilterOption {
    id: string;
    name: string;

    onClick?(item: FilterOption): void;
}

export type PropFilterProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    options: Array<FilterOption>;
    selected: string | undefined;
}

export const PropFilter: React.FC<PropFilterProps> = ({ title, options, selected, ...attrs }) => (
    <div {...attrs}>
        <Title>{title}</Title>

        {options.map(item => (
            <Item
                key={item.id}
                onClick={makeClickHandler(item)}
                selected={item.id === selected}
            >
                {item.name}
            </Item>
        ))}
    </div>
);

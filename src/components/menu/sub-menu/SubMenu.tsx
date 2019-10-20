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
    height: 24px;
    margin: 8px 0 8px 1px;
    font-family: Lab Grotesque, sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: ${({ selected }) => selected ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)'};
    padding-left: 12px;
    border-left: ${({ selected }) => selected ? '1px solid #000000;' : '1px solid transparent;'};
`;

const makeClickHandler = (item: SubMenuItem) => () => {
    if (item.onClick) {
        item.onClick(item);
    }
};

export interface SubMenuItem {
    id: string;
    title: string;
    selected?: boolean;

    onClick?(item: SubMenuItem): void;
}

export type SubMenuProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    items: Array<SubMenuItem>;
}

export const SubMenu: React.FC<SubMenuProps> = ({ title, items, ...attrs }) => (
    <div {...attrs}>
        <Title>{title}</Title>

        {items.map(item => (
            <Item
                key={item.id}
                onClick={makeClickHandler(item)}
                selected={!!item.selected}
            >
                {item.title}
            </Item>
        ))}
    </div>
);

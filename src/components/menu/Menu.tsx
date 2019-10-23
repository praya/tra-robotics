import React from 'react'
import { SubMenuItem, SubMenu } from './sub-menu/SubMenu';
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

const StyledSubMenu = styled(SubMenu)`
    margin-bottom: 20px;
`;

export interface SubMenu {
    id: string;
    name: string;
    items: Array<SubMenuItem>;
}

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    menus: Array<SubMenu>;
}

export const Menu: React.FC<BadgeProps> = ({ title, menus, ...attrs }) => (
    <Container {...attrs}>

        <Title>{title}</Title>

        {menus.map((subMenu) => (
            <StyledSubMenu key={subMenu.id} title={subMenu.name} items={subMenu.items} />
        ))}

    </Container>
);

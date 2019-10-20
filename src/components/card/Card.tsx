import * as React from 'react';
import styled from 'styled-components';
import { Info } from './info/Info';
import { Photo } from './Photo';
import { AssemblyProcessItem } from '../../services/api';
import { Badge } from './badge/Badge';


const Container = styled.div`
    position: relative;
    min-width: 600px;
    white-space: nowrap;
    font-family: Roobert, sans-serif;
    background: #FFFFFF;
    box-shadow: 0 1px 4px rgba(54, 65, 76, 0.15);
    border-radius: 4px;
`;


export interface CardProps {
    item: AssemblyProcessItem;
}

const StyledBadge = styled(Badge)`
    position: absolute;
    top: 8px;
    left: 8px;
`;

const StyledPhoto = styled(Photo)`
    margin: 16px 0 16px 32px;
    vertical-align: top;
`;

const StyledInfo = styled(Info)`
    margin: 29px 0 0 40px;
    vertical-align: top;
    display: inline-block;
`;

export const Card: React.FC<CardProps> = ({ item }) => (
    <Container>
        <StyledBadge type={item.assemblyStatus} />
        <StyledPhoto src={item.img} />
        <StyledInfo title={item.title} reviewStatus={item.reviewStatus} updatedAt={item.updated} />
    </Container>
);

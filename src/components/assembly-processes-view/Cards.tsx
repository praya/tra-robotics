import * as React from 'react';
import styled from 'styled-components';
import cardPlaceholderImage from './cardPlaceholderImage.png';
import { AssemblyProcessItem } from '../../services/api';
import { Card } from '../card/Card';


const cardHeight = 144;

const CardsContainer = styled.div`
    box-sizing: border-box;
    background-image: url(${cardPlaceholderImage});
    background-repeat: repeat-y;
    background-size: 555px 144px;
`;

const StyledCard = styled(Card)`
    margin-bottom: 12px;
`;

export type CardsProps = React.HTMLAttributes<HTMLDivElement> & {
    start: number;
    total: number;
    items: AssemblyProcessItem[]
}


export const Cards: React.FC<CardsProps> = React.memo(({ start, total, items }) => (
    <CardsContainer style={{
        height: `${total * cardHeight}px`,
        paddingTop: `${start * cardHeight}px`,
    }}>
        {items.map((item) => <StyledCard key={item._id} item={item} />)}
    </CardsContainer>
));

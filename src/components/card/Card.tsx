import * as React from 'react';
import styled from 'styled-components';
import { Info } from './info/Info';
import { Photo } from './Photo';
import { AssemblyProcessItem } from '../../services/api';
import { Badge } from './badge/Badge';
import { Controls } from './controls/Controls';


const Container = styled.a`
    display: block;
    color: #000000;
    position: relative;
    min-width: 600px;
    white-space: nowrap;
    font-family: Roobert, sans-serif;
    background: #FFFFFF;
    box-shadow: 0 1px 4px rgba(54, 65, 76, 0.15);
    border-radius: 4px;
    transition: box-shadow 0.2s ease-in-out;
    
    .controls {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    &[data-state="hover"],
    :hover {
        box-shadow: 0 6px 12px rgba(54, 65, 76, 0.15);
        
        .controls {
            opacity: 1;        
        }
    }
    
    &[data-state="active"],
    :active {
        box-shadow: 0 3px 6px rgba(54, 65, 76, 0.15);

        .controls {
            opacity: 1;        
        }
    }
`;

export type CardProps = React.HTMLAttributes<HTMLAnchorElement> & {
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


export const Card: React.FC<CardProps> = ({ item, ...attrs }) => (
    <Container href={`#item-${item._id}`} {...attrs}>
        <StyledBadge type={item.assemblyStatus} />
        <StyledPhoto src={item.img} />
        <StyledInfo title={item.title} reviewStatus={item.reviewStatus} updatedAt={item.updated} />

        <Controls className="controls" />

    </Container>
);

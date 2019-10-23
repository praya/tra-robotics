import { Button } from '../../button/Button';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import editIcon from './edit.png';
import trashIcon from './remove.png';
import arrowIcon from './arrow.png';


const Container = styled.div`
    float: right;
    padding-right: 25px;
`;

const Icons = styled.div`
    text-align: right;
    margin-top: 16px;
    margin-bottom: 28px;
`;

const Icon = styled.img`
    vertical-align: middle;
    width: 24px;
    height: 24px;
`;

const rotate = keyframes`
    100% { transform: rotate(360deg); }
`;

const Edit = styled(Icon).attrs({ src: editIcon })`
    margin: 0;
    
    &:hover {
        animation: ${rotate} 0.25s linear infinite;
    }
`;

const Remove = styled(Icon).attrs({ src: trashIcon })`
    &:hover {
        animation: ${rotate} 0.25s linear infinite;
    }

    margin-left: 8px;
`;

const ArrowLeft = styled(Icon).attrs({ src: arrowIcon })`
    margin: -11px -6px -9px 15px;
`;

export type ControlsProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Controls: React.FC<ControlsProps> = ({ ...attrs }) => (
    <Container {...attrs}>
        <Icons>
            <Edit />
            <Remove />
        </Icons>
        <Button>View Process <ArrowLeft /></Button>
    </Container>
);

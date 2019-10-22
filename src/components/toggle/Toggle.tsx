import React from 'react'
import styled from 'styled-components';
import { Pill } from './Pill';
import { Label } from './Label';


const Container = styled.div`
    position: relative;
    cursor: pointer;
    width: 193px;
    height: 32px;
    background: #e1e5e6;
    border-radius: 21px;
    
    
    > .pill {
        top: 0;
        left: 0;
        position: absolute;
        transition: width 0.15s linear, transform 0.15s linear, opacity 0.15s ease-in-out;
        width: 103px;
    }
    
    > .label {
        position: absolute;
        &:first-child {
            left: 0;
        }
        &:last-child {
          right: 0;        
        }
    }
    
    &[data-state="right"] > .pill {
        transform: translateX(90px);
    }
    
    &:hover {
        > .pill {
            width: calc(103px + 3px);
        }
        &[data-state="right"] > .pill {
            transform: translateX(calc(90px - 3px));
        }
    }
    
    &:active {
        > .pill {
            width: calc(103px + 5px);
        }
        &[data-state="right"] > .pill {
            transform: translateX(calc(90px - 5px));
        }
    }
`;


export interface State {
    id: string;
    title: string;
}

export type ToggleProps = React.HTMLAttributes<HTMLDivElement> & {
    active: string;
    states: [State, State];
    onStateChange(state: State): void;
}

export const Toggle: React.FC<ToggleProps> = ({ active, states: [left, right], onStateChange, ...attrs }) => (
    <Container
        data-state={active === left.id ? 'left' : 'right'}
        onClick={() => {
            onStateChange(active === left.id ? right : left)
        }}
        {...attrs}
    >
        <Pill className="pill" />
        <Label className="label" active={active === left.id}>{left.title}</Label>
        <Label className="label" active={active === right.id}>{right.title}</Label>
    </Container>
);

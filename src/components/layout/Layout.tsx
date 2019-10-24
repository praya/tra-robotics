import * as React from 'react';
import styled from 'styled-components';
import { Header } from '../header/Header';
import logoImage from './logo.png';


const CenteredContainer = styled.div`
    min-width: 1224px;
    max-width: 1520px;
    padding: 24px 10px;
    margin: auto;
`;


const Logo = styled.img.attrs({ src: logoImage, alt: 'TRA Robotics' })`
    width: 67px;
    height: 23px;
    margin-right: 2px;
`;

export type AssemblyProcessesViewProps = React.HTMLAttributes<HTMLDivElement> & {}

export const Layout: React.FC<AssemblyProcessesViewProps> = ({ children, ...attrs }) => (
    <div {...attrs}>
        <Header><Logo /> Design2Robofacturing</Header>

        <CenteredContainer>
            {children}
        </CenteredContainer>
    </div>
);

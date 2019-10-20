import * as React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 289px;
    font-family: Roobert, sans-serif;
`;

const Title = styled.h3`
    margin: 4px 0;
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
`;

const Row = styled.div`
    white-space: nowrap;
    border-bottom: 1px solid #BDC0C1;
    height: 10px;
    margin: 10px 0 13px 0;
    line-height: 14px;
    font-size: 14px;
    font-family: Lab Grotesque, sans-serif;
`;

const Name = styled.div`
    background: white;
    display: inline-block;
    color: rgba(0, 0, 0, 0.5);
    padding-right: 9px;
`;

const Value = styled.div<{ color?: string }>`
    float: right;
    background: white;
    padding-left: 11px;
    color: ${({ color = '#000000' }) => color};
`;


export type ReviewStatus = 'DRAFT' | 'SIMULATION_NEGATIVE' | 'SIMULATION_POSITIVE' | 'SIMULATION_REQUESTED' | 'SOLVED';

const statuses: { [key in ReviewStatus]: string } = {
    'DRAFT': 'Draft',
    'SIMULATION_NEGATIVE': 'Simulation Negative',
    'SIMULATION_POSITIVE': 'Simulation Positive',
    'SIMULATION_REQUESTED': 'Simulation Requested',
    'SOLVED': 'Solved',
};

const colors: { [key in ReviewStatus]: string } = {
    'DRAFT': '#000000',
    'SIMULATION_NEGATIVE': '#E91630',
    'SIMULATION_POSITIVE': '#34C86E',
    'SIMULATION_REQUESTED': '#000000',
    'SOLVED': '#000000',
};


export type InfoProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    reviewStatus: ReviewStatus;
    updatedAt: string;
}

export const Info: React.FC<InfoProps> = ({ title, reviewStatus, updatedAt, ...attrs }) => (
    <Container {...attrs}>
        <Title>{title}</Title>
        <div>
            <Row>
                <Value color={colors[reviewStatus]}>{statuses[reviewStatus]}</Value>
                <Name>Review</Name>
            </Row>
            <Row>
                <Value>{updatedAt}</Value>
                <Name>Last Updates</Name>
            </Row>
        </div>
    </Container>
);

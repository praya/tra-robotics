import React from 'react'
import styled from 'styled-components';


const BaseBadge = styled.div<{ color: string }>`
    display: inline-block;
    vertical-align: top;
    height: 20px;
    padding: 0 5px 0 5px;
    line-height: 19px;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: "Lab Grotesque", sans-serif;
    font-weight: 600;
    font-size: 11px;
    text-align: center;
    letter-spacing: 0.2px;
`;

const InReviewBadge = styled(BaseBadge).attrs({ children: 'In Review' })`
    background: #ffc800;
    border: 1px solid rgba(0, 0, 0, 0.15);
`;

const FinishedBadge = styled(BaseBadge).attrs({ children: 'Finished' })`
    background: #ffffff;
    border: 1px solid #afb3b6;
`;

export type BadgeType = 'IN_REVIEW' | 'REVIEW_FINISHED';

const badges: { [key in BadgeType]: string } = {
    'IN_REVIEW': InReviewBadge,
    'REVIEW_FINISHED': FinishedBadge,
};

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
    type: BadgeType;
}

export const Badge: React.FC<BadgeProps> = ({ type, ...attrs }) => {
    const AppropriateBadge = badges[type];
    return <AppropriateBadge {...attrs} />
};

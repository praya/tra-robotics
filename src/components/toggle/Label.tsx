import styled from 'styled-components';


export const Label = styled.div<{ active: boolean }>`
    font-family: Lab Grotesque, sans-serif;
    display: inline-block;
    text-align: center;
    width: 103px;
    font-size: 14px;
    line-height: 34px;

    opacity: ${({ active }) => active ? 1 : 0.5}
`;

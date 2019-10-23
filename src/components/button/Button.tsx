import styled from 'styled-components';


export const Button = styled.button`
    cursor: pointer;
    border: none;
    background: #2B7CEE;
    border-radius: 4px;
    font-family: Lab Grotesque, sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 14px;
    padding: 14px 14px 12px 14px;
    letter-spacing: 0.144444px;
    color: #ffffff;
    outline: none;
    transition: background-color 0.25s ease-in-out;
    
    &[data-state="hover"],
    :hover {
        background: #2b6fde;
    }
    
    &[data-state="active"],
    :active {
        background: #2b5ab4;
    }
`;

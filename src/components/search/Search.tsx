import styled from 'styled-components';
import searchIcon from './search.png';


export const Search = styled.input`
    background: #ffffff url(${searchIcon}) no-repeat 7px center;
    background-size: auto 24px;
    border: 1px solid #d6dadb;
    box-sizing: border-box;
    border-radius: 29px;
    padding: 5px 10px 5px 33px;
    outline: none;
    font-family: Lab Grotesque, sans-serif;
    font-size: 14px;
    line-height: 20px;
    width: 286px;
    
    ::placeholder {
        color: #000000;
        opacity: 0.3;
    }
`;

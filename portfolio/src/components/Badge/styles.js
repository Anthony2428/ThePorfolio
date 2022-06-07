import styled from 'styled-components'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiMongodb, SiAmazondynamodb } from 'react-icons/si';

export const IconDiv = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0px 80px 20px 80px;;
    align-items: center;
    position: absolute;
    bottom: 0;
    
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        padding: 0px;
    }
`;

export const HTMLIcon = styled(FaHtml5)`
    color: #E34F26;
    font-size: 6rem;
    
    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
    }
`;

export const CSSIcon = styled(FaCss3Alt)`
    color: #1572B6;
    font-size: 6rem;

    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
        margin: 10px;
    }
`;

export const JSIcon = styled(SiJavascript)`
    color: #F7DF1E;
    font-size: 6rem;
    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
    }
`;

export const SQLIcon = styled(SiMysql)`
    color: #4479A1;
    font-size: 6rem;
    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
    }
`;

export const NoSQLIcon = styled(SiMongodb)`
    color: #47A248;
    font-size: 6rem;
    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
    }
`;
export const DynamodbIcon = styled(SiAmazondynamodb)`
    color: #4053D6;
    font-size: 6rem;
    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
    }
`;
export const ReactIcon = styled(FaReact)`
    color: #61DAFB;
    font-size: 6rem;
    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
    }
`;
export const GitIcon = styled(FaGitAlt)`
    color: #F05032;
    font-size: 6rem;
    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
    }
`;
export const AWSIcon = styled(FaAws)`
    color: #232F3E;
    font-size: 6rem;
    @media screen and (max-width: 337px) {
        font-size: 4.5rem;
    }
`;
export const SectionTitle = styled.p`
    border-right: .15em solid orange;
    font-family: "Courier";
    font-size: 52px;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    bottom: 110%;
    flex-shrink: 3;

    @media screen and (max-width: 337px) {
        font-size: 34px;
    }

    &:nth-child(1) {
        width: 7.3em;
        -webkit-animation: type 2s steps(40, end);
        animation: type 2s steps(40, end);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
    }
    @keyframes type {
        0% { width: 0; }
        99.9% { border-right: .10em solid orange; }
        100% { border: none; }
    }
    @-webkit-keyframes type {
        0% { width: 0; }
        99.9% { border-right: .10em solid orange; }
        100% { border: none; }
    }

    @keyframes blink {
        50% { border-color: transparent; }
    }
    @-webkit-keyframes blink {
        50% { border-color: transparent; }
    }
`;

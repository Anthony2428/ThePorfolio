import styled from 'styled-components'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
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
        flex-direction: column;
        position: none;
    }
`;

export const HTMLIcon = styled(FaHtml5)`
    color: #E34F26;
    font-size: 6rem;

    &:before {
        content: attr(data-hover);
        visibility: hidden;
        opacity: 0;
        width: max-content;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 5px 5px;
        transition: opacity 1s ease-in-out;

        position: absolute;
        z-index: 1;
        left: 0;
        top: 110%;
    }
    &:hover&:before {
        opacity: 1;
        visibility: visible;
    }
`;

export const CSSIcon = styled(FaCss3Alt)`
    color: #1572B6;
    font-size: 6rem;
`;

export const JSIcon = styled(SiJavascript)`
    color: #F7DF1E;
    font-size: 6rem;
`;

export const SQLIcon = styled(SiMysql)`
    color: #4479A1;
    font-size: 6rem;
`;

export const NoSQLIcon = styled(SiMongodb)`
    color: #47A248;
    font-size: 6rem;
`;
export const DynamodbIcon = styled(SiAmazondynamodb)`
    color: #4053D6;
    font-size: 6rem;
`;
export const ReactIcon = styled(FaReact)`
    color: #61DAFB;
    font-size: 6rem;
`;
export const SectionTitle = styled.p`
    border-right: .15em solid orange;
    font-family: "Courier";
    font-size: 52px;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    bottom: 110%;

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

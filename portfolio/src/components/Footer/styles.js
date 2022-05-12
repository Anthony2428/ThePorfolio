import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { HiDocumentDownload } from 'react-icons/hi';

export const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px 10px !important;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    bottom: 0;
    width: 100vw;
    flex-direction: column;
    background-color: #24305E;
    z-index: 5;
    text-align: center;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: max-content;
    }
`;

export const Footnote = styled.h1`
    color: #BAB2B5;
    font-size: 18px;
    font-family: 'Indie Flower', cursive;
    font-weight: bolder;
`;
export const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px 80px 20px 80px;;
    align-items: center;
`;

export const LinkedInIcon = styled(FaLinkedin)`
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;

export const GithubIcon = styled(FaGithub)`
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;

export const MailIcon = styled(GrMail)`
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;

export const ResumeIcon = styled(HiDocumentDownload)`
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;
export const ScrollSpan = styled.div`
    font-family: 'Permanent Marker',cursive;
    font-size: 24px;
    color: #F8E9A1;
    position: relative;
    background: linear-gradient(to right, #F8E9A1 20%, #374785 30%, #F8E9A1 90%);
    background-size: 200% auto;
    
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    animation: shine 3s linear infinite;
    @keyframes shine {
        to {
        background-position: 200% center;
        }
    }
        @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.1);}
    100% {transform: scale(1);}
    }
    animation-name: pulse, shine;
    animation-duration: 1s;

`;

export const UpScroll = styled.a`
    font-family: 'Permanent Marker',cursive;
    font-size: 24px;
    color: #F8E9A1;
`;
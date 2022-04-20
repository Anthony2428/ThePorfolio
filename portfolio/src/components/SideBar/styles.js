import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { HiDocumentDownload } from 'react-icons/hi';

export const Wrapper = styled.div`
    position: absolute;
    right: -2%;
    top: 18%;
    transform: rotate(270deg);
    height: 50vh;
    width: 45px;
    resize: none;
    @media screen and (max-width: 820px) {
        display: none;
    }
`;
export const SidebarDiv = styled.div`
    width: 280px;
    height: 63px;
    background: #374785;
    transform: perspective(10px) rotateX(1deg);
    position: absolute;
    left: 195%;
    top: 40%;
    resize: none;

    @media screen and (max-width: 768px) {
        height: 17vw;
    };
    @media screen and (max-width: 480px) {
        height: 25vw;
    };
`;


export const IconDiv = styled.div`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transform: rotate(90deg);
    position: absolute;
    left: 450%;
    top: 22%;
    resize: none;

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
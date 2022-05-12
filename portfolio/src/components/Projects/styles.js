import styled from 'styled-components'

export const PageWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: auto;
    background-color: #374785;
    width: 100vw;
    position: relative;
    height: 100vh;

    @media screen and (max-width: 768px) {
        height: max-content;
    }
`;
export const Header = styled.h1`
    font-family: 'Permanent Marker',cursive;
    font-size: 72px;
    color: #F8E9A1;
    padding-top: 50px;
    position: relative;
    top: 5%;
`;

export const ProjectsDiv = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 80px 20px 80px;;
    align-items: center;
    margin: auto;
`;
export const ProjectsRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
export const ProjectTitleB = styled.p`
    width: 100%;
    background-image: linear-gradient(#5b5a5a, #000);
    text-align: center;
    position: absolute;
    bottom: 0;
    visibility: hidden;
    opacity:0;
    transition: opacity 0.3s linear;
    height: 15%;
    margin: auto;
`;
export const ProjectTitleS = styled.span`
    color: #fff;
    position: absolute;
    bottom: 0;
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    margin: auto;
`;

export const ProjectCard = styled.div`
    width: 500px;
    background-color: #fff;
    border-radius: 20%;
    border: 2px solid black;
    height: 200px;
    margin: 30px;
    position: relative;
    overflow: hidden;
    
    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        border: 2.5px solid #F8E9A1;
        cursor: pointer;
    }

    &:hover > p {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            visibility: visible;
            opacity: 1;
    }
    @media screen and (max-width: 1240px) {
        width: 385px;
    }
`;
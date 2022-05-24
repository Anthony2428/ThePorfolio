import styled from 'styled-components'

export const PageWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: auto;
    background-color: #374785;
    width: 100vw;
    position: relative;
    height: max-content;
`;
export const Header = styled.h1`
    font-family: 'Permanent Marker',cursive;
    font-size: 72px;
    color: #F8E9A1;
    padding-top: 50px;
    position: relative;
    top: 5%;

    @media screen and (max-width: 345px) {
        font-size: 48px;
    }
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
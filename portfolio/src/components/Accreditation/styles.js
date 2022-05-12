import styled from 'styled-components'

export const PageWrapper = styled.div`
    background-color: #fff;
    width: 100vw;
    position: relative;
    height: 450px;

    @media screen and (max-width: 1200px) {
        height: max-content;
    }
`;

export const Header = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-size: 52px;
    color: #374785;
    position: absolute;
    left: 2%;
    top: 5%;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0px 80px 20px 80px;;
    align-items: center;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        position: none;
    }
`;

export const Certificates = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px 80px;
    align-items: center;
    height: 450px;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        position: none;
    }
`;
export const Image = styled.img`
    width: 164px;
    aspect-ratio: auto 164 / 229;
`;
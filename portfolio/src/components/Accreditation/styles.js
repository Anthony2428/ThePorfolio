import styled from 'styled-components'

export const PageWrapper = styled.div`
    justify-content: center;
    text-align: left;
    align-items: center;
    margin: auto;
    background-color: #fff;
    width: 100vw;
    position: relative;
    height: max-content;
`;

export const Header = styled.h1`
    font-family: 'Permanent Marker',cursive;
    font-size: 52px;
    padding: 10px;
    color: #374785;
    position: relative;
    top: 5%;
`;

export const Container = styled.div`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        position: none;
    }
`;

export const Certificates = styled.div`
    margin-top: 70px;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px 80px;
    align-items: center;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        position: none;
        margin-top: 50px;
    }
`;
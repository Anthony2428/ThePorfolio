import styled from 'styled-components'

export const Wrapper = styled.div`
    height: auto;
    width: 100%;
    flex-direction: column;
    height: 100%;
`;

export const PageWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: auto;
    height: 100vh;
    background-color: #A8D0E6;
    flex-direction: column;
`;
export const SubHeading = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-size: 52px;
    color: #374792;
    margin: auto;
    
    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`;
export const Heading = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-size: 100px;
    text-align: left;
    color: #374785;

    @media screen and (max-width: 768px) {
        font-size: 52px;
    }
`;
export const Header = styled.div`
    padding: 10px 0 0 35px !important;
    width: 100vw;
    text-align: left;
    line-height: 75px; 
    position: absolute;
    top: 30%;

    @media screen and (max-width: 768px) {
        top: 7%;
        margin-left: -15px;
        line-height: 45px; 
        padding: 0;
    }
`;
export const FrontTitle = styled.p`
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 52px;
    margin-left: 10px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`;
export const BackTitle = styled.p`
    color: #fff;
    justify-content: center;
    background-color: #374785;
    position: absolute;
    left: -35px;
    top: 195px;
    align-items: right;
    font-family: 'Permanent Marker',cursive;
    font-size: 20px;
    width: 50%;
    height: 0;
    border-top: 120px solid #A8D0E6;
    border-left: 120px solid transparent;
`;
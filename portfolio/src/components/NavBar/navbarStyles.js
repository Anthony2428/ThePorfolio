import styled from 'styled-components'
import { FaCode } from 'react-icons/fa'

export const Heading = styled.a`
    font-family: 'Permanent Marker',cursive;
    font-size: 48px;
    position: relative;
    right: 45px;
    cursor: pointer;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: none;
        justify-content: center;
    };

    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #F8E9A1;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 0 80px !important;
    padding-right: 10px !important;
    position: absolute;
    top: 0;
    width: 100vw;
    flex-direction: row;
    z-index: 5;

    @media screen and (max-width: 768px) {
        height: 17vw;
    };
    @media screen and (max-width: 480px) {
        height: 25vw;
    };
`;
export const NavLink = styled.a`
    font-family: 'Permanent Marker',cursive;
    font-size: 48px;
    float: right;
    color: #fff;
    padding-right: 50px;

    &:hover {
        transition: ease-in-out all .25s; 
        -moz-transition: ease-in-out all .25s;
        -webkit-transition: ease-in-out all .25s;
        color: #F8E9A1;
        text-decoration: none;
    }
`;

export const Bars = styled(FaCode)`
    color: #fff;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 10;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
    &:hover {
            transition: ease-in-out all .25s; 
            -moz-transition: ease-in-out all .25s;
            -webkit-transition: ease-in-out all .25s;
            color: #F8E9A1;
            text-decoration: none;
            font-weight: bold;
        }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
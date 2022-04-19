import React from "react";
import NavBar from "../NavBar";
import { PageWrapper, Header, Heading, SubHeading, Wrapper, FrontTitle, TitleSpan } from "./styles";
import Footer from "../Footer";
import Badge from "../Badge";
import Skills from "../Skills";
import About from "../About";

const Home = () => {
    
    return (
        <Wrapper id="home">
        <PageWrapper>
            <NavBar />
            <Header>
                <FrontTitle>Hello, I am</FrontTitle>
                <Heading>Anthony Lopez</Heading>
                <SubHeading>Full Stack Web Developer</SubHeading>
            </Header>
            <Badge />
        </PageWrapper>
        <About />
        <Skills />
        <Footer />
        </Wrapper>
    )
};
export default Home;
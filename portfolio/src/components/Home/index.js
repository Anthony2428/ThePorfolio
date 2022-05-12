import React from "react";
import NavBar from "../NavBar";
import { PageWrapper, Header, Heading, SubHeading, Wrapper, FrontTitle, TitleSpan } from "./styles";
import Footer from "../Footer";
import Badge from "../Badge";
import Projects from "../Projects";
import About from "../About";
import Sidebar from "../SideBar";
import Education from "../Accreditation";

const Home = () => {
    
    return (
        <Wrapper id="home">
        <PageWrapper>
            <NavBar />
            <Header>
                <FrontTitle>Hello, I am</FrontTitle>
                <Heading>Anthony Lopez</Heading>
                <SubHeading>Full Stack Web Developer</SubHeading>
                <Sidebar id="trigger-education" />
            </Header>
            <Badge />
        </PageWrapper>
        <Education />
        <About />
        <Projects />
        <Footer />
        </Wrapper>
    )
};
export default Home;
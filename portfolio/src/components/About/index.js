import React from "react";
import { PageWrapper, Container, Context, Header } from "./styles";

const About = () => {
    
    return (
        <PageWrapper id="trigger-about">
                <Container id="about">
                <Header className="item" data-aos="fade-left" data-aos-anchor="#trigger-about">About Me</Header>
                    <Context>I'm Anthony. A Lifetime Learner and Full Stack Software Engineer. I attended the University of Washington Coding Bootcamp and achieved the Certificate of Completion in Full Stack Web Development. This achievement is the greatest learning experience I've come across and has motivated me to never stop learning and refining my skills. I love to combine my skills with other things I am passionate about. For example, Sports and Gaming! My studies were not halted after my Certification. I dove into Cloud Computing as it plays a major role in how web apps operate today. I achieved the Cloud Practitioner and Solutions Architect Certifications within AWS. I'm currently studying for the AWS Developer Assoicate Certificate. My ultimate goal is to sharpen my skills in a role that will elevate and test my knowledge. This will include learning new languages and technologies, getting creative to improve web apps, and connecting and growing with my collaborators!</Context>
                </Container>
        </PageWrapper>
)
};
export default About;
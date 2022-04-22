import React from "react";
import Repository from "../Repositories";
import { PageWrapper, Header, ProjectsDiv, ProjectsRow, ProjectCard, ProjectTitleB, ProjectTitleS } from "./styles";

const Projects = () => {
    
    return (
            <PageWrapper>
                    <ProjectsDiv id="projects">
                        <Header className="item" data-aos="fade-down">Projects</Header>
                    <ProjectsRow>

                    <ProjectCard>
                            <ProjectTitleB>
                                <ProjectTitleS>Title</ProjectTitleS>
                            </ProjectTitleB>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectTitleB>
                                <ProjectTitleS>Title</ProjectTitleS>
                            </ProjectTitleB>
                        </ProjectCard>

                    </ProjectsRow>

                    <ProjectsRow>

                    <ProjectCard>
                            <ProjectTitleB>
                                <ProjectTitleS>Title</ProjectTitleS>
                            </ProjectTitleB>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectTitleB>
                                <ProjectTitleS>Title</ProjectTitleS>
                            </ProjectTitleB>
                        </ProjectCard>
                        
                    </ProjectsRow>
                    </ProjectsDiv>
            </PageWrapper>
)
};
export default Projects;
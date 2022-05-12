import React, { useState } from "react";
import ProjectModal from "../Modal";
import Repository from "../Repositories";
import { PageWrapper, Header, ProjectsDiv, ProjectsRow, ProjectCard, ProjectTitleB, ProjectTitleS } from "./styles";

const Projects = () => {

    const [openModal, setModalOpen] = useState(false);
    

    return (
            <PageWrapper>
                    <ProjectsDiv id="projects">
                        <Header className="item" data-aos="fade-down" data-aos-anchor="#trigger-project">Projects</Header>
                    <ProjectsRow id="trigger-project">
                    <ProjectCard onClick={() => {setModalOpen(true);}}>
                            <ProjectTitleB>
                                <ProjectTitleS>Title</ProjectTitleS>
                            </ProjectTitleB>
                        </ProjectCard>

                        <ProjectCard onClick={() => {setModalOpen(true);}}>
                            <ProjectTitleB>
                                <ProjectTitleS>Title</ProjectTitleS>
                            </ProjectTitleB>
                        </ProjectCard>

                    </ProjectsRow>

                    <ProjectsRow>

                    <ProjectCard onClick={() => {setModalOpen(true);}}>
                            <ProjectTitleB>
                                <ProjectTitleS>Title</ProjectTitleS>
                            </ProjectTitleB>
                        </ProjectCard>

                        <ProjectCard onClick={() => {setModalOpen(true);}} id="trigger-footer">
                            <ProjectTitleB>
                                <ProjectTitleS>Title</ProjectTitleS>
                            </ProjectTitleB>
                        </ProjectCard>
                        
                    </ProjectsRow>
                    </ProjectsDiv>
                    {openModal && <ProjectModal setModalOpen={setModalOpen} openModal={openModal} />}
            </PageWrapper>
)
};
export default Projects;
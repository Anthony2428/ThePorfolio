import React, { Fragment } from "react";
import TechBlog from "./screenshots/TechBlog.png";
import ForecastDashboard from "./screenshots/ForecastDashboard.png";
import Sportsbox from "./screenshots/Sportsbox.png";
import PasswordGen from "./screenshots/PasswordGen.png";
import EmployeeTracker from "./screenshots/EmployeeTracker.png";
import { ProjectCard, ProjectTitleB, ProjectsRow } from "./styles";

const Repository = ({setModalOpen, setModalData}) => {
    const repos = [
        {
            name: "SportsBox Sports",
            description: "Web Application offering sports entertainment to users, The Right Way.",
            gitLink: "https://github.com/Anthony2428/Sportsbox-v2",
            liveLink: "https://sportsbox-sports.herokuapp.com/",
            image: Sportsbox
        },
        {
            name: "Forecast Dashboard",
            description: "Connects to Weather API to present user with a city's 5-day Forecast.",
            gitLink: "https://github.com/Anthony2428/Forecast-Dashboard",
            image: ForecastDashboard
        },
        {
            name: "The Tech Blog",
            description: "CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.",
            gitLink: "https://github.com/Anthony2428/Tech-Blog",
            liveLink: "https://techblogant.herokuapp.com/",
            image: TechBlog,
        },
        {
            name: "Employee Tracker",
            description: "A solution for managing a company's employees using node, inquirer, and MySQL",
            gitLink: "https://github.com/Anthony2428/Employee-Tracker",
            image: EmployeeTracker,
            liveLink: "N/A ~ Console App",
        },
        {
            name: "Password Generator",
            description: "Generates passwords based on user criteria",
            gitLink: "https://github.com/Anthony2428/Ant-s-Password-Generator",
            liveLink: "https://anthony2428.github.io/Ant-s-Password-Generator",
            image: PasswordGen
        },
]

    const allJsx = repos.map(repo => {
        return(
            <ProjectCard onClick={(e) => {e.preventDefault(); setModalData(repo); setModalOpen(true);}}>
                <img style={{padding: "10px"}} src={repo.image} alt=""/>
                <ProjectTitleB>
                    {repo.name}
                </ProjectTitleB>
            </ProjectCard>
        );
    })
    return (
        <>
            <ProjectsRow id="trigger-project">
                {allJsx[0]}
                {allJsx[1]}
            </ProjectsRow>

            <ProjectsRow id="trigger-footer">
                {allJsx[2]}
                {allJsx[3]}
            </ProjectsRow>
            <ProjectsRow>
                {allJsx[4]}
            </ProjectsRow>
        </>
    )
};
export default Repository;
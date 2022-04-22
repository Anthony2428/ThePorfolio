import React from "react";
import TechBlog from "./screenshots/TechBlog.png";
import ForecastDashboard from "./screenshots/ForecastDashboard.png";
import Sportsbox from "./screenshots/Sportsbox.png";
import PasswordGen from "./screenshots/PasswordGen.png";
import EmployeeTracker from "./screenshots/EmployeeTracker.png"
const Repository = () => {
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
            <div class="column is-4 mb-5 box" style={{backgroundColor: "#878f99"}}>        
                <div class="mb-4 is-flex">
                    <img class="image is-128x128" src={repo.image} alt=""/>
                </div>
                <h2 class="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">{repo.name}</h2>
                <p class="subtitle has-text-grey">{repo.description}</p>
                <a href={repo.gitLink}>Github Link</a>
                <a href={repo.liveLink}>Live Link</a>
            </div>
        );
    })
    return (
        <div class="columns is-multiline p-4">
            {allJsx}
        </div>
    )
};
export default Repository;
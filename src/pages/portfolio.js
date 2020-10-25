import React from 'react';
// import "../style2.css"
import Projects from "../components/Project"

const projectsData = [{
    img:"life-point.png",
    link:" https://life-point.herokuapp.com/members",
    projectName:"Life Point 1"
},{
    img:"home-screenshot.png",
    link:" https://ktlnn.github.io/send-foodz/",
    projectName:"Send Foodz"
},{
    img:"weather-deashboard.png",
    link:" https://mustafadag84.github.io/Weather-Dashboard/",
    projectName:"Weather Deashboard "
},{
    img:"code-quiz.png",
    link:" https://life-point.herokuapp.com/members",
    projectName:"Code Quiz"
},{
    img:"workday-scheduler.png",
    link:"  https://mustafadag84.github.io/third-part-APIs-work-day-scheduler/",
    projectName:"Workday Scheduler"
}]

function Portfolio() {
    return (
        <main className="container">
            <div className="row">
                <h2>Portfolio</h2>
            </div>
            <hr/>
                <section>

                    <div className="row">

{projectsData.map((prj,index) => <Projects project = {prj} key = {index}/>)}



                    </div>






                </section>

  </main>
  );
}

export default Portfolio;

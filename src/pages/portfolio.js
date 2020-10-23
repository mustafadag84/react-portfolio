import React from 'react';
// import "../style2.css"
import Projects from "../components/Project"

const projectsData = [{
    img:"life-point.png",
    link:" https://life-point.herokuapp.com/members",
    projectName:"Life Point 1"
},{
    img:"life-point.png",
    link:" https://life-point.herokuapp.com/members",
    projectName:"Life Point 1"
},{
    img:"life-point.png",
    link:" https://life-point.herokuapp.com/members",
    projectName:"Life Point 1"
},{
    img:"life-point.png",
    link:" https://life-point.herokuapp.com/members",
    projectName:"Life Point 1"
},{
    img:"life-point.png",
    link:" https://life-point.herokuapp.com/members",
    projectName:"Life Point 1"
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

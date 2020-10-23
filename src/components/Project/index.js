import React from 'react';

function Projects(props) {
  return (
    <div className="col col-12 col-md-5 col-lg-5">
            <div className="card">
              <img src={`./img/${props.project.img}`} className="card-img-top" alt="project images"/>
              <a className="card-title" href={props.project.link}>{props.project.projectName}</a>
            </div>
          </div>
  );
}

export default Projects;

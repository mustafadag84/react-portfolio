import React from 'react';
import ProfilePicture from "../img/profile.jpg";
function About() {
  return (
    <main className="container">
    <div className="row">
      <h2>About Me</h2>
    </div>
    <hr/>
    <div className="row">
      <div className="col col-12 col-lg-3">
        <img src={ProfilePicture} id="bio" className="card-img-top" alt="Mustafa Dag"/>
      </div>

      <div className="col col-12 col-md-6 col-lg-9">
        <p className="card-text">My name is Mustafa Dag, and I enjoy dive into new technologies and finding ways to learn
          them.
          I’m currently a full-stack web development student at Rutgers University Coding Bootcamp.
          This gives me opportunity to interact with new tools and learn new skills.
          I have 10 years of experience working in different industries. I have a bachelor’s degree in Economics.
          I consider myself a good self-motivated team player, and I like to be organised and on time.
        </p>

      </div>
    </div>
  </main>
  );
}

export default About;

import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>B.Tech.</h5>
              <small>Final year (CSE Cyber Security) from VIT, Bhopal - 8.83</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Class XII</h5>
              <small>Shahu Dayanad Jr. College - 82.62%</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Class X</h5>
              <small>Mahaveer English School - 93.20%</small>
            </article>
          </div>
          <p>I am a skilled web developer with expertise in building efficient and scalable web applications using the MEAN/MERN stack. My passion for cybersecurity has enabled me to specialize in penetration testing, vulnerability assessment, and bug hunting, making web applications more secure. I have also practiced cloud-based solutions particularly the GCP, to enhance web application performance and reliability. I am continuously learning and staying up-to-date with the latest technological advancements to provide the best solutions to my clients.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro

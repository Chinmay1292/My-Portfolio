import React from 'react';
import IMG2 from '../../assets/weatherzip.png';
import IMG3 from '../../assets/collegepick.png';
import IMG4 from '../../assets/dpl.png';
import IMG5 from '../../assets/clf.png';
import IMG6 from '../../assets/JARVISAI.jpg';
import IMG7 from '../../assets/AIIG.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'AI-IG',
      img: IMG7,
      description:
        'Simply enter your imagination, and AI-IG will create a corresponding image for you.',
      technologies: 'MERN | ViteJS | Tailwind CSS | Cloudinary',
      link: 'https://ai-ig.vercel.app',
      github: 'https://github.com/Chinmay1292/AI-IG',
    },
    {
      id: 2,
      title: 'Zipcode based Weather Mapping',
      img: IMG2,
      description:
        'Weather mapped using Zipcode which is more accurate and efficient',
      technologies: 'Angular | Python | MySQL',
      
      github: 'https://github.com/Chinmay1292/',
    },
    {
      id: 3,
      title: 'College Pick',
      img: IMG3,
      description: 'Ideal Private University Finder (Award winner in DevFest 2.0 national level hackathon)',
      technologies: 'JavaScript | HTML-CSS | Bootstrap',
      link: 'https://rohitbhat1603.github.io/DevFest2.O',
      github: 'https://github.com/Chinmay1292/DevFest2.O',
    },
    {
      id: 4,
      title: 'Detect & Prevent the Slow Loris Attack using Isolation Forest and Port Blocking',
      img: IMG4,
      description:
        ' Tried to detect the IP, attacking a Web Server using own approach. Also, prevented the attack by blocking the IP',
      technologies: 'Python | Kali Linux | Wireshark',
      link: 'https://www.linkedin.com/posts/chinmay-chougule-478909213_slowloris-dos-ddos-activity-6880364640208068608-51n0?utm_source=share&utm_medium=member_desktop',
      github: ' linkmix.co/11486890',
    },
    {
      id: 5,
      title: 'Circuit-Level Firewall',
      img: IMG5,
      description:
        'Using Circuit-Level Firewall’s URL blocking approach we made a Timer based URL blocker/unblocker',
      technologies: 'Python | Kali Linux',
      link: 'https://medium.com/@chinmaychougule1212/url-blocker-using-circuit-level-firewall-approach-for-web-security-check-here-to-know-more-d0806d81f275',
      github: 'https://github.com/Chinmay1292/Circuit-Level-Firewall',
    },
    {
      id: 6,
      title: 'J.A.R.V.I.S AI Voice Assistant',
      img: IMG6,
      description:
        'A voice assistant fully made using Python(Numpy, OpenCV, requests) and QT Designer(GUI).',
      technologies: 'Python | QT Designer',
      link: 'https://drive.google.com/file/d/1tyq4vaSc0tOnppOREs9_k0CD_DtN9Pp7/view?usp=drivesdk',
      github: 'https://github.com/Chinmay1292/JARVIS_AI',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

import React, { useRef, useEffect } from 'react';
import styles from './projects.module.css'
import projects from "../data/projects.json";
import { ProjectsCard } from './ProjectsCard';
import Slider from 'react-slick';

export const Projects = () => {
  const titleRef = useRef(null);
  
      useEffect(() => {
          const el = titleRef.current;
  
          const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
              el.classList.add(styles.visible);
              observer.unobserve(el); 
              }
          });
          }, { threshold: 0.2 });
  
          observer.observe(el);
      }, []);
      
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    

        responsive: [
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.projectSection} id="projects">
      <h1 ref={titleRef} className={styles.title}>PROJECTS</h1>
      <Slider {...sliderSettings}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.projectSlide}>
              <ProjectsCard {...project} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};
import React, { useRef, useEffect } from 'react';
import styles from './projects.module.css'
import projects from "../data/projects.json";
import { ProjectsCard } from './ProjectsCard';

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

  return (
    <section className={styles.projectSection} id="projects">
      <h1 ref={titleRef} className={styles.title}>PROJECTS</h1>
      
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.projectBox}>
              <ProjectsCard {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
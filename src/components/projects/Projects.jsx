import React from 'react'
import styles from './projects.module.css'
import projects from "../data/projects.json";
import { ProjectsCard } from './ProjectsCard';

export const Projects = () => {
  return (
    <section className={styles.projectSection} id="projects">
      <h1 className={styles.title}>PROJECTS</h1>
      <div className={styles.projects}>
      {projects.map((projects, id) => {
        return <ProjectsCard key={id} {...projects} />;
      })}
      </div>
    </section>
  );
};
import React from 'react';
import styles from './projects.module.css'

export const ProjectsCard = ({
    title, imageSrc, description, skills, githubLink,liveDemo
}) => {
    return (
        <div className={styles.projectCard}>
            <img src={`${import.meta.env.BASE_URL}${imageSrc}`} alt={title} className={styles.image} onError={(e) => {
                e.target.onerror = null; 
                e.target.src = `${import.meta.env.BASE_URL}images/default.png`; 
            }}/>
{/* <img
  src={imageSrc ? imageSrc : '/images/default.png'}  // Direct path or fallback
  alt={title}
  className={styles.image}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = '/images/default.png';  // Fallback image
  }}
/> */}

            <div className={styles.cardContent}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>
                        {skills.map((skill, id) => (
                            <li key={id} className={styles.skill}>{skill}</li>
                        ))}
                    </ul>
                <div className={styles.links}>
                    <a href={githubLink} className={styles.link} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                    <a href={liveDemo} className={styles.link} target="_blank" rel="noopener noreferrer">Live Link</a>
                </div>
            </div>
        </div>
    );
};

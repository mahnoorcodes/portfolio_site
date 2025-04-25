import React from 'react';
import styles from './projects.module.css'

export const ProjectsCard = ({
    title, imageSrc, description, skills, githubLink, liveDemo
}) => {
    return (
        <div className={styles.projectCard}>
            <img src={`${import.meta.env.BASE_URL}${imageSrc}`} alt={title} className={styles.image} />
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

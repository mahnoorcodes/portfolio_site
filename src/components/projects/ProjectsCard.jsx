import React from 'react';
import styles from './projects.module.css'
<<<<<<< HEAD
=======
const supportspaceImg = process.env.PUBLIC_URL + '/assets/projImg/supportspace.png';
const taskmateImg = process.env.PUBLIC_URL + '/assets/projImg/taskmate.png';
const marketnetImg = process.env.PUBLIC_URL + '/assets/projImg/marketnet.jpg';

const imageMap = {
    'supportspace.png': supportspaceImg,
    'taskmate.png': taskmateImg,
    'marketnet.jpg': marketnetImg,
};
>>>>>>> 0b07cfbcddc4968a73e784797c0e91099a8e944e

export const ProjectsCard = ({
    title, imageSrc, description, skills, githubLink, liveDemo
}) => {
    return (
        <div className={styles.projectCard}>
            <img src={`/projImg/${imageSrc}`} alt={title} className={styles.image} />
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

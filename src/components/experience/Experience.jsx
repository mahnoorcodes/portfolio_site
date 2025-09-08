import React from 'react'
import styles from './experience.module.css'

const timelineData = [
    {
        title: 'Web Developer',
        company: 'ICEDROP.IO - US Delivery Service Website Project - Upwork Remote',
        date: 'May 2025 – Present',
        description: 'Developed a responsive delivery service website for a U.S.-based client using WordPress and Elementor on Upwork. Managed front-end UI/UX implementation, integrated third-party RESTful APIs, and built custom interactive components using JavaScript, PHP, and CSS. Applied AI-assisted workflows with ChatGPT for code review and optimisation.'
    }
];

export const Experience = () => {
return (
    <section className={styles.experienceSection} id="experience">
        <h1 className={styles.title}>EXPERIENCE</h1>

    <div className={styles.timeline}>
    {timelineData.map((item, index) => (
        <div className={styles.timelineItem} key={index}>            
            <div className={styles.timelineDot}></div>
            <span className={styles.timelineDate}>{item.date}</span>
            <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
            </div>
        </div>
    ))}
    </div>
</section>
)
}

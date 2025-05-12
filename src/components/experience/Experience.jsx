import React from 'react'
import styles from './experience.module.css'

const timelineData = [
    {
        title: 'Freelance Web Designer and Developer',
        company: 'Upwork- Remote',
        date: 'May 2025 – Present',
        description: 'Designed modern, accessible websites for small businesses using Figma, GoDaddy and WordPress.'
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

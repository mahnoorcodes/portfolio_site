import React, { useRef, useEffect } from 'react';
import styles from './experience.module.css'

const timelineData = [
    {
        title: 'Information Technology Engineer Intern',
        company: 'Panosec FZE LLC- Remote',
        date: '2025 – Present',
        description: '• Redesigning and upgrading an old website using WordPress, Divi and AI tools. \n • Collaborate with the team and complete the client\'s tasks. \n • Refactoring and maintaining a web application built with React, TypeScript, and Docker.',
        position:'left'
    },
    {
        title: 'Web Developer',
        company: 'ICEDROP.IO & ICERIDE.IO - US Delivery Service Website Project - Upwork Remote',
        date: '2025 – Present',
        description: '• Developed a responsive delivery service website for a U.S.-based client using WordPress and Elementor on Upwork. \n • Managed front-end UI/UX implementation, integrated third-party RESTful APIs, and built custom interactive components using JavaScript, PHP, and CSS. \n   • Applied AI-assisted workflows with ChatGPT for code review and optimisation.',
        position:'right'
    },
    {
        title: 'Uniform Sales Assistant',
        company: 'Bukhatir Education Advancement and Management International | American School of Creative Science, Al Layyah',
        date: 'Aug - Sept 2024',
        description: '• Streamlined sales and inventory management using Microsoft Excel. \n • Enhanced customer experience by efficiently handling transactions and inquiries.',
        position:'left'
    }
];

export const Experience = () => {
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
<section className={styles.experienceSection} id="experience">
    <h1 ref={titleRef} className={styles.title}>EXPERIENCE</h1>

    <div className={styles.timelineWrapper}>
        
        {/* Vertical line */}
        <div className={styles.timelineLine}></div>

        {timelineData.map((item, index) => (
            <div className={styles.timelineRow} key={index}>
                {/* LEFT COLUMN: DATE */}
                <div className={styles.timelineDateCol}>
                    <span className={styles.timelineDate}>{item.date}</span>
                </div>

                {/* CENTER COLUMN: DOT */}
                <div className={styles.timelineDotCol}>
                    <div className={styles.timelineDot}></div>
                </div>

                {/* RIGHT COLUMN: CONTENT */}
                <div className={styles.timelineContentCol}>
                    <div className={styles.timelineContent}>
                        <h3>{item.title}</h3>
                        <h4>{item.company}</h4>
                        <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                    </div>
                </div>
            </div>
        ))}

    </div>
</section>

)
}

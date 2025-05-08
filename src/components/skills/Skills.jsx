import React from 'react'
import styles from './skills.module.css'
import techstack from "../data/techstack.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import gamedesigncert from '../../assets/gamedesigncert.jpg';
import creativewritingcert from '../../assets/creativewritingcert.jpg';
import onemillcert from '../../assets/onemillcert.jpg';
import pythcert from '../../assets/pythcert.jpg';
import figmacert from '../../assets/figmacert.jpg'

const certificates = [
    {
        title: "Introduction to Game Design- California Institute of the Arts",
        date: "Issued Mar 2021",
        image: gamedesigncert
    },
    {
        title: "Creative Writing: The Craft of Plot- Wesleyan University",
        date: "Issued Mar 2021",
        image: creativewritingcert
    },
    {
        title: "1 Million Prompters- DUBAI FUTURE FOUNDATION",
        date:"Issued Jan 2025",
        image: onemillcert
    },
    {
        title: "Learning Python (2021)- LinkedIn Learning",
        date:"Issued Apr  2025",
        image: pythcert
    },
    {
        title: "Figma for UX Design ",
        date:"Issued May  2025",
        image: figmacert
    },
];
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        },
        },
    ],
};

export const Skills = () => {
return (
    <section id="skills" className={styles.skillsSection}>
        <h1 className={styles.title}>TECH STACK</h1>
        <div className={styles.techstackBoxes}>
            {Object.entries(techstack).map(([category, items]) => (
            <div key={category} className={styles.categoryBox}>
                <h2 className={styles.categoryTitle}>{category.replaceAll("_", " ")}</h2>
                <div className={styles.stackItems}>
                {items.map((item, index) => (
                    <div key={index} className={styles.techItem}>
                    {item.title}
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>

        <div className={styles.certificateSection}>
            <h1 className={styles.title}>CERTIFICATES</h1>
            <Slider {...sliderSettings}>
                {certificates.map((cert, index) => (
                <div key={index} className={styles.card}>
                    <img src={cert.image} alt={cert.certTitle} className={styles.image} />
                    <p>{cert.title}</p>
                    <p>{cert.date}</p>
                </div>
                ))}
            </Slider>
        </div>
    </section>
);
};

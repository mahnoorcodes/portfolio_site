import React, {useState} from 'react'
import styles from './navbar.module.css';
import { getImageUrl } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <a href="/" className={styles.navbarLink}>MAHNOOR FAISAL</a>
            <FontAwesomeIcon icon={faBars} className={styles.menuIcon} alt="menu" />
            <div className={styles.navbarLinks}>
                <a href="/about" >ABOUT</a>
                <a href="/projects">PROJECTS</a>
                <a href="/skills">SKILLS</a>
                <a href="/cv">CV</a>
                <a href="/contact">CONTACT ME</a>
            </div>
        </nav>
    );
};

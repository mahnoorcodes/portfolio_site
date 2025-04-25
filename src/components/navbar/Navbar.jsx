import React, {useState , useEffect} from 'react'
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const Navbar = ({ onScrollTo, refs }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    

    return(
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
            <li className={styles.navbarTitle} onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });window.history.pushState("", document.title, window.location.pathname);}}>
                MAHNOOR FAISAL
            </li>
                <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick= {toggleMenu} alt="menu" />
            </div>

            <ul className={`${styles.navbarMenu} ${menuOpen ? styles.show : ''}`}>
                <li onClick={() => onScrollTo(refs.aboutRef)}>About</li>
                <li onClick={() => onScrollTo(refs.skillsRef)}>Skills</li>
                <li onClick={() => onScrollTo(refs.projectsRef)}>Projects</li>
                <li onClick={() => onScrollTo(refs.cvRef)}>CV</li>
                <li onClick={() => onScrollTo(refs.contactRef)}>Contact Me</li>
            </ul>
        </nav>
    );
};

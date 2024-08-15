import { gsap, Power3 } from 'gsap';
import React from 'react';
import Institution from './Institution';
import Images from './Images';
import styles from "./content.module.css"
function Content() {
 
    return (
        <div className={styles.container}>
            <Institution  />
            <Images   />
        </div>
    );
}

export default Content;

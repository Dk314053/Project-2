import React from 'react';
import styles from "./column1.module.css"
import Sidebar from './sidebar/Sidebar';

const Column1 = () => {
    return (
        <div className={styles.column1}>
          <Sidebar/>
        </div>
    );
}

export default Column1;

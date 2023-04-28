import React from 'react';
import styles from "./column3.module.css"
import Trend from './Trend BOX/Trend';
import Follow from './Trend BOX/Follow';
const Column3 = () => {
    return (
        <div className={styles.column3}>
           <Trend />
           <Follow/>
        </div>
    );
}

export default Column3;

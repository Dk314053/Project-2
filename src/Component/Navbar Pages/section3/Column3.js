import React from 'react';
import styles from "./column3.module.css"
import Trend from './Right Section/Trend Box/Trend';
import Follow from './Right Section/Follow Box/Follow';
import Search from './Right Section/Search box/Search';
const Column3 = () => {
    return (
        <div className={styles.column3}>
            <Search/>
           <Trend />
           <Follow/>
        </div>
    );
}

export default Column3;

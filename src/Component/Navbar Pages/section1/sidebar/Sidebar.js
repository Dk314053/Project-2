import React from 'react'
import styles from './Sidebar.module.css'
import {
    FaTwitter,
    FaHome,
    FaHashtag,
    FaRegBell,
    FaRegEnvelope,
    FaRegBookmark,
    FaClipboardList,
    FaUserAlt,
    FaMehBlank
} from 'react-icons/fa'


const Sidebar = () => {
    return (
        <div className={styles.twitter}>
        <div className={styles.sidebar} >
            <ul style={{listStyleType:'none'}}>
                <li>
                    <a href='' id={styles.bar}><FaTwitter className={styles.icons }  id={styles.logo}/></a>
                </li>
                <li>
                    <a href=''><FaHome className={styles.icons}  />Home</a>
                </li>
                <li>
                    <a href=''><FaHashtag className={styles.icons} />Explore</a>
                </li>
                <li>
                    <a href=''><FaRegBell className={styles.icons}  />Notification</a>
                </li>
                <li>
                    <a href=''>< FaRegEnvelope className={styles.icons} />Messages</a>
                </li>
                <li>
                    <a href=''><   FaRegBookmark className={styles.icons}  />Bookmarks</a>
                </li>
                <li>
                    <a href=''><FaClipboardList className={styles.icons} />Twitter Blue</a>
                </li>
                <li>
                    <a href=''>< FaUserAlt className={styles.icons} />Profile</a>
                </li>
                <li>
                    <a href=''>< FaMehBlank className={styles.icons} />More</a>
                </li>
                <div className={styles.sidebar_Btn}>
                    <a href=''>Profile</a>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar
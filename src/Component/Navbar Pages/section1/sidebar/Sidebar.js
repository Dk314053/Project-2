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
// import LoginUser from './LoginUser'


const Sidebar = () => {
    return (
        <div className={styles.twitter}>
        <div className={styles.sidebar} >
            <ul  style={{listStyleType:'none'}}>
                <li>
                    <a href='' id={styles.bar}><FaTwitter className={styles.icons }  id={styles.logo}/></a>
                </li>
                <li>
                    <a href=''><FaHome className={styles.icons}  /><span className={styles.navlink}>Home</span></a>
                </li>
                <li>
                    <a href=''><FaHashtag className={styles.icons} /><span className={styles.navlink}>Explore</span></a>
                </li>
                <li>
                    <a href=''><FaRegBell className={styles.icons}  /><span className={styles.navlink}>Notification</span></a>
                </li>
                <li>
                    <a href=''>< FaRegEnvelope className={styles.icons} /><span className={styles.navlink}>Messages</span></a>
                </li>
                <li>
                    <a href=''><   FaRegBookmark className={styles.icons}  /><span className={styles.navlink}>Bookmark</span></a>
                </li>
                <li>
                    <a href=''><FaClipboardList className={styles.icons} /><span className={styles.navlink}>Twitter Blue</span></a>
                </li>
                <li>
                    <a href=''>< FaUserAlt className={styles.icons} /><span className={styles.navlink}>Profile</span></a>
                </li>
                <li>
                    <a href=''>< FaMehBlank className={styles.icons} /><span className={styles.navlink}>More</span></a>
                </li>
                <div className={styles.sidebar_Btn}>
                    <a href='' id={styles.sbtn}>Tweet</a>
                </div>
                {/* <div className={styles.profile}>
                    <LoginUser/>
                </div> */}
            </ul>
        </div>
        </div>
    )
}

export default Sidebar
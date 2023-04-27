import React from 'react'
import styles from './CreateTweet.module.css'
import { FaCalendarCheck, FaRegImage, FaRegListAlt, FaRegSmile } from 'react-icons/fa'

function CreateTweet() {
  return (
    <div className={styles.create}>
        <div className={styles.create_first}>
            <div className={styles.create_img}>
                <img src="https://static-ssl.businessinsider.com/image/5d0bae5ce3ecba536905f1c3-2400/2019-06-13t212153z129809567rc1825480440rtrmadp3gaming-e3-elon.jpg" alt='profile img'/>
            </div>
            <div className={styles.create_input}>
            <input
            type='text'
            className={styles.create_control}
            placeholder="What's happing"
            />
             </div>
        </div>
        <div className={styles.create_second}>
            <div className={styles.create_icons}>
          <FaRegImage className={styles.ic}/>
          <FaRegListAlt className={styles.ic}/>
          <FaRegSmile className={styles.ic}/>
          <FaCalendarCheck className={styles.ic}/>
          </div>
          <div className={styles.create_btn}>
              <a href=''>Tweet</a>
          </div>
        </div>
     </div>
  )
}

export default CreateTweet

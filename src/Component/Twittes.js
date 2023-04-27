import React from 'react'
import styles from './Twittes.module.css'
import CreateTweet from './CreateTweet'
import Posts from './Posts'

function Twittes() {
  return (
    <div className={styles.posts}>
        <div className={styles.posts_home}>Home</div>
        <CreateTweet/>
        <Posts/>
    </div>
  )
}

export default Twittes

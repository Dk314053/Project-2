import React from 'react'
import styles from './Posts.module.css'
function Posts() {
  return (
    <div className={styles.Posts }>
      <div className={styles.posts_first}>
        <div className={styles.posts_first_img}>
          <img src="https://tse3.mm.bing.net/th?id=OIP.uSoYLZI8RVT6kUlXraje5wHaEK&pid=Api&P=0" alt='profile img'/>
        </div>
       <div className={styles.first_name}> <strong>Rhutik Thakare</strong> </div>
       <div className={styles.posts_first_username}>@rhutikthakare2001</div>
      </div>
      
    </div>
  )
}

export default Posts

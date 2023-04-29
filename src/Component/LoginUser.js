import React from 'react'
import styles from './LoginUser.module.css'
function LoginUser() {
  return (
    <div className={styles.container}>
       <div className={styles.imgdiv}>
             <img  src="https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
       </div>
       <div className={styles.info}>
         <span className={styles.name}>Rhutik Thakare</span>
         <span className={styles.id}>@rhutk2001</span>
       </div>
       <div className={styles.more}>
    ***
       </div>

    </div>
  )
}

export default LoginUser

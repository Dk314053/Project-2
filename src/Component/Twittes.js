import React from 'react'
import styles from './Twittes.module.css'
import CreateTweet from './CreateTweet'
import Posts from './Posts'
import tweets from './tweets.json'
function Twittes() {
  let data1="https://source.unsplash.com/random/500×600/?men"
  let data2="https://source.unsplash.com/random/600×600/?men"

  let data=[]
  data=tweets
  return (
    <div className={styles.posts}>
        <div className={styles.posts_home}>Home</div>
        <CreateTweet/>

         {
          data.map(person =>{
            return( <Posts key={person.id} person={person} /> )
          })
         }

        
       
    </div>
  )
}

export default Twittes

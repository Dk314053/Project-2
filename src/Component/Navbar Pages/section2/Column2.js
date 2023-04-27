import React from 'react';
import styles from "./column2.module.css"
import Tweet from './tweet/Tweet';
import Post from './post/Post';
import tweets from './tweets.json'
const Column2 = () => {
    
       
      
   
      let data =[]
      data=tweets
        

    return (
        <div className={styles.column2}>
           <Tweet/>
          { data.map(person =>{
        return( <Post person={person} />)
    })}
        </div>
    );
}

export default Column2;

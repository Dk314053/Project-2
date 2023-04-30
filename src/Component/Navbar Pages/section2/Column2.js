import React from 'react';
import styles from "./column2.module.css"

import Post from './post/Post';
import tweets from './tweets.json'
import ComposeForm from './tweet/ComposeForm';
const Column2 = () => {
    
       
      
   
      let data =[]
      data=tweets
        

    return (
        <div className={styles.column2}>
           <div><ComposeForm/></div>
           <hr/>
          <div>{ data.map(person =>{
        return( <Post person={person} />)
    })}</div>
        </div>
    );
}

export default Column2;

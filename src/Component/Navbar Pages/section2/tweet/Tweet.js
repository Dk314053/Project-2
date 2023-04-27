import React from 'react';
import styles from './tweet.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const Tweet = () => {
    return (
        <div >
            <h2>Home</h2>
               <div >
               <Button variant="text">For you</Button>
               <Button variant="Following">For you</Button>
              <hr/>
               </div>
               <div>
                <img className={styles.image} src='https://picsum.photos/1000/500?q=12'/>
                <TextField  id="outlined-disabled" defaultValue="What's happening?"
                   sx={{
                    width: 300
                }} />
               </div>

         </div>
    );
}

export default Tweet;

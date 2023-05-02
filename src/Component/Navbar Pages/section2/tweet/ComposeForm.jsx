
import "./ComposeForm.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import TweetCard from "react-tweet-card";
import { FaCalendarCheck, FaRegImage, FaRegListAlt, FaRegSmile } from 'react-icons/fa'
import styles from "./CreateTweet.module.css"
function ComposeForm() {
  const [editorValue, setEditorValue] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(editorValue);
     setTweets([...tweets, editorValue]);
    setEditorValue("");
  };

  function handleFormSubmit(value) {
    console.log(`Submitting: ${value}`);
  }

  return (
    <div className="main-container-wrap">
      
      <form className="compose-form" onSubmit={handleSubmit}>
        <div className="compose-form-container">
        <h1>Home</h1> <div className={styles.topbtn}>
               <Button variant="text">For you</Button>
               <Button variant="text">Following</Button>
               </div>
              <hr/>
               </div>
               <div className={styles.inputcstn}>
                <img className="tweetImg" src='https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg  '/>
               
                <textarea rows="1" value={editorValue}
                 onChange={handleEditorValueChange} placeholder="Whats's happening"/>
                 </div>
                 <div className={styles.create_second}>
                    <div className={styles.create_icons}>
                  <FaRegImage className={styles.ic}/>
                  <FaRegListAlt className={styles.ic}/>
                  <FaRegSmile className={styles.ic}/>
                  <FaCalendarCheck className={styles.ic}/>
                  </div>
                  <div className={styles.create_btn}>
                  <button  class="btn btn-primary" style={{borderRadius:"1rem"}} type="submit"
                  onClick={handleFormSubmit}> {" "}Tweet</button>

                  </div>
                </div>

                  
        
      
      </form>

      {/* <div className="tweet-container">
        {tweets.map((tweet, index) => (
          <div  key={index} className="tweet">
            <img className="tweetImg" src='https://picsum.photos/1000/500?q=12'/>
           <h2> kamal@kammalpanwar192</h2>{tweet}
          </div>
        ))}
      </div> */}
      {tweets.map((tweet, index) => (
      <TweetCard
        author={{
          name: "Kamal Panwar",
          username: "randyfactory",
          image:
            "https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg"
        }}
        tweet={tweet}
        time={new Date(2021, 2, 2, 21, 3)}
        source="Twitter for iPhone"
        permalink="https://twitter.com/randyfactory/status/1366841622495961091 "  // optional
        
      />  ))}
    </div>

     
  );
}

export default ComposeForm;

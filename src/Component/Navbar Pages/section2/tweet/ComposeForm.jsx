
import "./ComposeForm.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import TweetCard from "react-tweet-card";

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
        <h1>Home</h1> 
               <Button variant="text">For you</Button>
               <Button variant="Following">For you</Button>
              <hr/>
               </div>
               <div>
                <img className="tweetImg" src='https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg  '/>
               
                <textarea rows="3" value={editorValue}
                 onChange={handleEditorValueChange} label="What's happening"/>
                 
          
        </div>
        <button  class="btn btn-primary" type="submit"
        
    
        onClick={handleFormSubmit}> {" "}Tweet</button>

        
      
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
        permalink="https://twitter.com/randyfactory/status/1366841622495961091" // optional
       
      />  ))}
    </div>

     
  );
}

export default ComposeForm;

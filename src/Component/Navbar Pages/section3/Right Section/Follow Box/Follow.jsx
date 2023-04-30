import { useState } from "react";
import FollowButton from "./FollowButton";
import Styles from "./Follow.module.css"

export default function Follow() {


  const content = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
      name: "Narendra Modi",
      userName: "@narendramodi",
      dots: "Follow",
      dots3: "Following",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.hKVyzWBE16aOIBDGI14fzwHaHa&pid=Api&P=0",
      name: "Sachin Tendulkar",
      userName: "@sachinTendulkar",
      dots: "Follow",
      dots3: "Following",
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.ScYp15kHnxHhSEsItsUc4wHaIT&pid=Api&P=0",
      name: "Sharukh Khan",
      userName: "@srk",
      dots: "Follow",
      dots3: "Following",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1524985235795898368/8mwdw8n3_400x400.png",
      name: "Snapdragon India",
      userName: "@Snapdragon_IN",
      dots: "Follow",
      dots3: "Following",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1341671435635310592/p4vUY-nx_400x400.jpg",
      name: "Shraddha",
      userName: "@ShraddhaKapoor",
      dots: "Follow",
      dots3: "Following",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1647628957888708608/ZVPTc70P_400x400.jpg",
      name: "Rajasthan Royals",
      userName: "@rajasthanroyals",
      dots: "Follow",
      dots3: "Following",
    },
  ];
  const [shows, setShows] = useState(false);
 const handleShows=()=>{
  setShows(!shows)
 }
 const displayShows=shows? content: content.slice(0,3)
  return (
    <>
      <div className={Styles.box}>
        <h3 style={{paddingLeft:"1rem"}}>Who To Follow </h3>

        {displayShows.map((element) => (
          <div className={Styles.contentmain}>
            <div className={Styles.content}>
              <img
                style={{ paddingTop: "1.5em", borderRadius: "50%" }}
                src={element.image}
                width="60em"
                height="60em"
                alt="proppp"
              />
            </div>
            <div>
              <p>{element.name}</p>
              <p>{element.userName}</p>
            </div>
            <div style={{ paddingTop: "1.5em" }}>
              <FollowButton />
            </div>
          </div>
        ))}
        <h4 className={Styles.ShowMore} onClick={handleShows}>{shows ? 'Show Less' : 'Show More'}</h4>
      </div>
    </>
  );
}

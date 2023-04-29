import React, { useRef, useState } from 'react'
import styles from './Posts.module.css'
import { FaComment, FaHeart, FaLeaf, FaRegChartBar, FaRegCheckCircle } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
function Posts(props) {

  const [like, setlike] = useState(props.person.commentCount)
  const [second, setsecond] = useState(props.person.reTweetsCount)
  const [third, setthird] = useState(props.person.likeCount)
  const [fourth, setfourth] = useState(props.person.commentCount)
  const handelClick = () => {
    let value = like;
    value == props.person.commentCount ? setlike(like + 1) : setlike(like - 1)
  }
  const handelClick2 = () => {
    let value = second;
    value == props.person.reTweetsCount ? setsecond(second + 1) : setsecond(second - 1)
  }
  
  let toogleIcon = props.person.isLiked
  const [ic, sic] = useState(toogleIcon? <FaHeart className={styles.re} />:<FcLike className={styles.re} />)
  const handelClick3 = () => {
    let value = third;

    if (value == props.person.likeCount) {
      setthird(third + 1)
      sic(<FcLike className={styles.re} />)
    } else {
      setthird(third - 1)
      sic(<FaHeart className={styles.re} />)
    }


  }
  const handelClick4 = () => {
    let value = fourth;
    value == props.person.commentCount ? setfourth(fourth + 1) : setfourth(fourth - 1)
  }

  console.log(toogleIcon)

  return (
    <div className={styles.postss}>
      <div className={styles.postss_first}>
        <div className={styles.posts_first_img}>
          <img src={props.person.image} alt='profile img' />
        </div>
        <div className={styles.posts_first_name}>
          <strong>{props.person.tweetedBy.name}</strong>
          {
            props.person.isLiked ? <FaRegCheckCircle className={styles.verify} /> : ""
          }
        </div>

        <div className={styles.posts_first_username}>@{props.person.tweetedBy.name} - {props.person.time} </div>
      </div>
      <div className={styles.postss.details}>
        <div className={styles.postss_details_msg}>
          {props.person.content}

        </div>
        <div className={styles.postss_details_img}>
          {
            props.person.iframe ?   <iframe  src={props.person.iframeLink}   ></iframe> :<img src={props.person.image} alt='posts image' onDoubleClick={handelClick3} />
          }
       
        </div>

        {/* <p> iconst start</p> */}

        <div className={styles.reaction}>
          <span className={styles.re} id={styles.ic1} onClick={handelClick}><FaComment  className={styles.re} />{like}</span>
          <span className={styles.re} id={styles.ic2} onClick={handelClick2}><FaRegChartBar className={styles.re} />{second}</span>

          <span className={styles.re} id={styles.ic3} onClick={handelClick3}>
            {ic}
            {third}</span>

          <span className={styles.re} id={styles.ic4} onClick={handelClick4}> <FaLeaf className={styles.re} /> {fourth}</span>
        </div>
      </div>
    </div>
  )
}

export default Posts

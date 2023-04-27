import React from 'react';
import styles from "./post.module.css"
import { FaRegComment,FaRetweet } from 'react-icons/fa';

import { TbShare2 } from "react-icons/tb";
import {IoStatsChart} from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";




const Post = (props) => {
    return (
        <div>
           <img src={props.person.image} className={styles.postProfileimg} />
              <h3 className={styles.postProfileName}>{props.person.tweetedBy.name}</h3>
              <p>{props.person.content}</p>
              <img src={props.person.image} className={styles.postImg} />
              <div className={styles.icon}>
                 <FaRegComment className={styles.comment} /><data >{props.person.commentCount}</data>
                 <FaRetweet className={styles.retweet}/><data >{props.person.reTweetsCount}</data>
                 <AiOutlineHeart className={styles.like}/><data >{props.person.likeCount}</data>
                 <IoStatsChart className={styles.views}/><data >{props.person.likeCount}</data>
                 <TbShare2 className={styles.share}/><data >{props.person.likeCount}</data>
    </div>
        </div>
    );
}

export default Post;

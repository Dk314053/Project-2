import React from 'react'
import PropTypes from 'prop-types';
import Avatar from './Avatar';
 import './Tweet.css';


function Tweet( props) {
     const {user, createdOn, children} = props;

  return (
    <div className='tweet'>
       <Avatar name={user} />

        <div className='tweet-header'>
             <span className='tweet-user'> @{user}</span>
             <span className='tweet-created-on'> {createdOn}</span>
        </div>
        <div className='tweet-content'> {children}</div>
    </div>
  )
}

Tweet.propTypes={
    user: PropTypes.string,
    createdOn: PropTypes.string,
};

export default Tweet;
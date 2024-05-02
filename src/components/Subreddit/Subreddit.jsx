import React from 'react'
import './Subreddit.scss'
import Icon from '../../assets/images/redditIcon.png'

const Subreddit = ({ data }) => {
  const {title, icon_img, url} = data
  console.log(data)
  return (
    <div className="subreddit_container">
      <div className="subreddit">
        <div className="subreddit_avatar">
          <img src={icon_img || Icon} alt="avatar" />
        </div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Subreddit
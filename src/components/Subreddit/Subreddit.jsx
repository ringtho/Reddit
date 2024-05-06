import React from 'react'
import './Subreddit.scss'
import Icon from '../../assets/images/redditIcon.png'

const Subreddit = ({ data, setUrl, setQuery }) => {
  const {title, icon_img, url} = data

  const handleClick = async () => {
    setQuery('')
    setUrl(url)  
  }

  return (
    <div className="subreddit_container">
      <div className="subreddit" onClick={handleClick}>
        <div className="subreddit_avatar">
          <img src={icon_img || Icon} alt="avatar" />
        </div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Subreddit
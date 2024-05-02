import React from 'react'
import './Subreddit.scss'
import Icon from '../../assets/images/redditIcon.png'
import { getRedditData } from '../../api/api'

const Subreddit = ({ data, setData }) => {
  const {title, icon_img, url} = data

  const handleClick = async () => {
    console.log(url)
    try {
        const { data } = await getRedditData(url)
        setData(data.children)
    } catch(error) {
        console.log(error)
    }
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
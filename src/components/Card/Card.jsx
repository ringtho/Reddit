import React from 'react'
import './Card.scss'
import Pic from '../../assets/images/pic.jpg'
import { formatDistanceToNow } from 'date-fns'
// import { processImgUrl } from '../../utils/imageUrlProcessing'

const Card = ({ data }) => {
  const { author, title, created, score, url, subreddit, is_self, selftext, is_video, media } = data.data
  
  const date = new Date(created * 1000)
  const formattedTime = formatDistanceToNow(date, { includeSeconds: true })

//   const previewImg = preview?.images[0]?.source?.url
//   const imgUrl = processImgUrl(previewImg)


  const videoUrl = media?.reddit_video?.fallback_url

  return (
    <section className="card_container">
      <div className="card_header">
        <div className="card_avatar">
          <img src={Pic} alt="avatar" />
        </div>
        <div className="card_username">
          <a href="#">{author}</a>
        </div>
        <div className="card_time">
          <p>{formattedTime} ago</p>
        </div>
      </div>
      <div className="card_title">
        <h2>{title}</h2>
      </div>
      {subreddit && (
        <div className="card_subreddit">
          <span>#{subreddit}</span>
        </div>
      )}
      {is_self && (
        <div className="card_description">
          <p>{selftext}</p>
        </div>
      )}
      {url && !is_video && (
        <div className="card_image">
          <img src={url} alt="card-pic" />
        </div>
      )}
      {is_video && (
        <div className='card_video'>
          <video controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="card_footer">
        <div>{score}</div>
        <div>Comments</div>
      </div>
    </section>
  )
}

export default Card
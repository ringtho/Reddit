import React, { useEffect, useState } from 'react'
import './Card.scss'
import { formatDistanceToNow } from 'date-fns'
import { getUserInfo } from '../../api/api'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'
import { formatNumber } from '../../utils/formatNumber'
// import { processImgUrl } from '../../utils/imageUrlProcessing'

const Card = ({ data }) => {

  const [authorData, setAuthorData] = useState([])
  const { author, title, created, score, url, subreddit, is_self, selftext, is_video, media, domain, num_comments } = data.data
  const date = new Date(created * 1000)
  const formattedTime = formatDistanceToNow(date, { includeSeconds: true })

//   const previewImg = preview?.images[0]?.source?.url
//   const img = processImgUrl(previewImg)


  const videoUrl = media?.reddit_video?.fallback_url
  const numComments = formatNumber(num_comments)
  const votes = formatNumber(score)

  useEffect(() => {
    
    const getAuthorData = async () => {
        try {
            const { data } = await getUserInfo(author)
            setAuthorData(data)
        } catch (error) {
            console.log(error)
        }
    }
    getAuthorData()

  }, [author])

  console.log(domain)

  return (
    <section className="card_container">
      <div className="card_header">
        <div className="card_avatar">
          <img src={authorData.icon_img} alt="avatar" />
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
        <div className='card_likes'>
            <KeyboardDoubleArrowUpRoundedIcon />
            {votes}
            <KeyboardDoubleArrowDownRoundedIcon />
        </div>
        <div className='card_comments'>
            <ModeCommentOutlinedIcon />
            {numComments}
        </div>
      </div>
    </section>
  )
}

export default Card
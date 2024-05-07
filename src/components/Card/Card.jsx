import React, { useState } from 'react'
import './Card.scss'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'
import { formatNumber } from '../../utils/formatNumber'
import Comments from '../Comments/Comments'
import { formatTime } from '../../utils/formatTime'
import { useGetUserInfoQuery } from '../../api/services/postsData'
// import { processImgUrl } from '../../utils/imageUrlProcessing'

const Card = ({ data }) => {

  // const [authorIcon, setAuthorIcon] = useState("")
  const [upVote, setUpVote] = useState(false)
  const [downVote, setDownVote] = useState(false)
  const [viewComments, setViewComments] = useState(false)
  const {
    author,
    title,
    created,
    score,
    url,
    subreddit,
    is_self,
    selftext,
    is_video,
    media,
    permalink,
    num_comments,
  } = data?.data
  const authorData = useGetUserInfoQuery(author)
  const authorIcon = authorData?.data?.data?.icon_img

  
  const formattedTime = formatTime(created)
//   const previewImg = preview?.images[0]?.source?.url
//   const img = processImgUrl(previewImg)


  const videoUrl = media?.reddit_video?.fallback_url
  const numComments = formatNumber(num_comments)
  const votes = formatNumber(score)

  const handleUpVote = () => {
    setUpVote(!upVote)
    setDownVote(false)
  }

  const handleDownVote = () => {
    setUpVote(false)
    setDownVote(!downVote)
  }

  return (
    <div>
      <section className="card_container">
        <div className="card_header">
          <div className="card_avatar">
            <img src={authorIcon} alt="avatar" />
          </div>
          <div className="card_username">
            <p>{author}</p>
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
          <div className="card_video">
            <video controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className="card_footer">
          <div className="card_likes">
            <div
              className="icon_up"
              style={{ color: upVote ? '#06d6a0' : '' }}
              onClick={handleUpVote}
            >
              <KeyboardDoubleArrowUpRoundedIcon />
            </div>

            <p
              style={{ color: upVote ? '#06d6a0' : downVote ? '#f72585' : '' }}
            >
              {votes}
            </p>
            <div
              className="icon_down"
              style={{ color: downVote ? '#f72585' : '' }}
              onClick={handleDownVote}
            >
              <KeyboardDoubleArrowDownRoundedIcon />
            </div>
          </div>
          <div
            className="card_comments"
            onClick={() => setViewComments(!viewComments)}
          >
            <ModeCommentOutlinedIcon className="comments_icon" />
            <p>{numComments}</p>
          </div>
        </div>
      </section>
      <aside
        className="aside_comments"
        style={{ display: viewComments ? 'block' : 'none' }}
      >
        {viewComments && <Comments permalink={permalink} />}
      </aside>
    </div>
  )
}

export default Card
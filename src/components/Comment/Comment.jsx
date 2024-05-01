import React, { useState, useEffect } from 'react'
import { formatTime } from '../../utils/formatTime'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'
import { formatNumber } from '../../utils/formatNumber'
import { getUserInfo } from '../../api/api'
import './Comment.scss'

const Comment = ({ data }) => {
  console.log(data)
  const { body, author, score, created, subreddit, replies } = data
  const [authorIcon, setAuthorIcon] = useState('')
  const [upVote, setUpVote] = useState(false)
  const [downVote, setDownVote] = useState(false)
  const formattedTime = formatTime(created)
  const votes = formatNumber(score)

  useEffect(() => {
    const getAuthorData = async () => {
      try {
        const { data } = await getUserInfo(author)
        setAuthorIcon(data.icon_img)
      } catch (error) {
        console.log(error)
      }
    }
    getAuthorData()
  }, [author])

  const handleUpVote = () => {
    setUpVote(!upVote)
    setDownVote(false)
  }

  const handleDownVote = () => {
    setUpVote(false)
    setDownVote(!downVote)
  }

  return (
    <section className="card_container">
      <div className="card_header">
        <div className="card_avatar">
          <img src={authorIcon} alt="avatar" />
        </div>
        <div className="card_username">
          <a href="#">{author}</a>
        </div>
        <div className="card_time">
          <p>{formattedTime} ago</p>
        </div>
      </div>
      {/* {subreddit && (
        <div className="card_subreddit">
          <span>#{subreddit}</span>
        </div>
      )} */}
      <div className="card_description">
          <p>{body}</p>
      </div>
      <div className="card_footer">
        <div className="card_likes">
          <div
            className="icon_up"
            style={{ color: upVote ? '#06d6a0' : '' }}
            onClick={handleUpVote}
          >
            <KeyboardDoubleArrowUpRoundedIcon />
          </div>

          <p style={{ color: upVote ? '#06d6a0' : downVote ? '#f72585' : '' }}>
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
        >
          <ModeCommentOutlinedIcon />
          {replies?.data?.children?.length || 0}
        </div>
      </div>
    </section>
  )
}

export default Comment
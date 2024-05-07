import React, { useState } from 'react'
import { formatTime } from '../../utils/formatTime'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'
import { formatNumber } from '../../utils/formatNumber'
import { useGetUserInfoQuery } from '../../api/services/postsData'
import './Comment.scss'

const Comment = ({ data }) => {
  const { body, author, score, created, replies } = data
  const authorData = useGetUserInfoQuery(author)
  const authorIcon = authorData?.data?.data?.icon_img
  const [upVote, setUpVote] = useState(false)
  const [downVote, setDownVote] = useState(false)
  const formattedTime = formatTime(created)
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
    <section className="card_container comment">
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
          <ModeCommentOutlinedIcon className="comments_icon" />
          {replies?.data?.children?.length || 0}
        </div>
      </div>
    </section>
  )
}

export default Comment
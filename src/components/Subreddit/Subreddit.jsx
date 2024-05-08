import React from 'react'
import './Subreddit.scss'
import Icon from '../../assets/images/redditIcon.png'
import { useDispatch } from 'react-redux'
import { addAfter, addQuery, addUrl } from '../../api/features/postsSlice'
// import { postsApi } from '../../api/services/postsData'

const Subreddit = ({ data }) => {
  const {title, icon_img, url} = data
  const dispatch = useDispatch()

  const handleClick = async () => {
    dispatch(addQuery(null))
    dispatch(addUrl(url))
    dispatch(addAfter(null))
    // dispatch(postsApi.util.invalidateTags(['Posts']))
  }

  return (
    <div className="subreddit_container">
      <div className="subreddit" onClick={handleClick}>
        <div className="subreddit_avatar">
          <img src={icon_img || Icon} alt={title} />
        </div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Subreddit
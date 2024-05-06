import React from 'react'
import { addQuery } from '../../api/features/postsSlice'
import { useSelector, useDispatch } from 'react-redux'
import './NotFound.scss'

const NotFound = () => {
  const { query } = useSelector((state) => state.postsData)
  const dispatch = useDispatch()
  return (
    <div className="notfound_container">
      <p>No results found for {query}</p>
      <button className="back_btn" onClick={() => dispatch(addQuery(null))}>
        Back Home
      </button>
    </div>
  )
}

export default NotFound
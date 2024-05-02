import React, { useEffect, useState } from 'react'
import { getRedditComments } from '../../api/api'
import Comment from '../Comment/Comment'
import './Comments.scss'

const Comments = ( { permalink }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
      const getPostComments = async (link) => {
        try {
          const data = await getRedditComments(link)
          setComments(data[1].data.children)
        } catch (error) {
          console.log(error)
        }
      }
      getPostComments(permalink)
    }, [permalink])

  return (
    <section className="comments_container">
      { comments.map((commentData) => {
        if(commentData.kind === 't1') {
            return <Comment key={commentData.data.id} data={commentData.data} />
        }
        return null
      }
        
        
      )}
    </section>
  )
}

export default Comments
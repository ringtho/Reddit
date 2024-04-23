import React from 'react'
import './Card.scss'
import Pic from '../../assets/images/pic.jpg'
import { formatDistanceToNow } from 'date-fns'

const Card = ({ data }) => {
  const { author, title, created } = data.data
  
  const date = new Date(created * 1000)
  const formattedTime = formatDistanceToNow(date, { includeSeconds: true })

  return (
    <section className='card_container'>
        <div className='card_header'>
            <div className='card_avatar'>
                <img src={Pic} alt='avatar' />
            </div>
            <div className='card_username'>
                <a href='#'>{author}</a>
            </div>
            <div className='card_time'>
                <p>{formattedTime} ago</p>
            </div>
        </div>
        <div className='card_title'>
            <h2>{title}</h2>
        </div>
        <div className='card_image'>
            <img src={Pic} alt='card-pic' />
        </div>
        <div className='card_footer'>
            <div>Votes</div>
            <div>Comments</div>
        </div>
    </section>
  )
}

export default Card
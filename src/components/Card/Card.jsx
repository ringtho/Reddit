import React from 'react'
import './Card.scss'
import Pic from '../../assets/images/pic.jpg'

const Card = () => {
  return (
    <section className='card_container'>
        <div className='card_header'>
            <div className='card_avatar'>
                <img src={Pic} alt='avatar' />
            </div>
            <div className='card_username'>
                <a href='#'>Sringtho</a>
            </div>
            <div className='card_time'>
                <p>4 days Ago</p>
            </div>
        </div>
        <div className='card_title'>
            <h2>Why you must be the best at whatever you do!</h2>
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
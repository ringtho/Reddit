import React from 'react'
import './Navbar.scss'
import RedditIcon from '@mui/icons-material/Reddit'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  return (
    <nav className='navbar_container'>
      <div className='logo_container'>
        <RedditIcon sx={{ fontSize: "30px" }} />
        <h1>Reddit</h1>
      </div>
      <div>
        <MenuIcon />
      </div>
    </nav>
  )
}

export default Navbar
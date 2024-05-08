import React from 'react'
import './Footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <footer className="footer_container">
      <small>Designed by Smith Ringtho</small>
      <div className='footer_logos'>
        <a href="https://github.com/ringtho">
          <GitHubIcon className='logo' />
        </a>
        <a href="https://www.linkedin.com/in/sringtho/">
          <LinkedInIcon className='logo' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
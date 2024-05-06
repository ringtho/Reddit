import React, { useState } from 'react'
import './Navbar.scss'
import RedditIcon from '@mui/icons-material/Reddit'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

const Navbar = ({ setQuery }) => {
  const [word, setWord] = useState('')

  const handleChange = (e) => {
    setWord(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(word.trim())
    setWord('')
  }

  return (
    <nav className="navbar_container">
      <div className="logo_container">
        <RedditIcon sx={{ fontSize: '30px' }} />
        <h1>Reddit</h1>
      </div>
      <form onSubmit={handleSubmit} className="navbar_search">
        <input
          type="text"
          value={word}
          onChange={handleChange}
          placeholder="Search Reddit"
          required
        />
        <button>
          <SearchIcon />
        </button>
      </form>
      <div>
        <MenuIcon />
      </div>
    </nav>
  )
}

export default Navbar
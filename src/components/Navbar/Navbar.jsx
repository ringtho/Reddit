import React from 'react'
import './Navbar.scss'
import RedditIcon from '@mui/icons-material/Reddit'
import MenuIcon from '@mui/icons-material/Menu'
import { searchRedditQuery } from '../../api/api'

const Navbar = ({ setData, query, setQuery }) => {

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await searchRedditQuery(query)
      setData(data.children)
    } catch(error) {
      console.log(error)
    }
    setQuery('')
  }

  return (
    <nav className="navbar_container">
      <div className="logo_container">
        <RedditIcon sx={{ fontSize: '30px' }} />
        <h1>Reddit</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} required/>
        <button>Submit</button>
      </form>
      <div>
        <MenuIcon />
      </div>
    </nav>
  )
}

export default Navbar
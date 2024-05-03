import React, { useEffect, useState } from 'react'
import './Subreddits.scss'
import { getPopularSubreddits } from '../../api/api'
import Subreddit from '../Subreddit/Subreddit'

const Subreddits = ({ setData }) => {
  const [subreddits, setSubreddits] = useState([])

  useEffect(() => {
    const getSubRedditList = async () => {
        try {
            const { data } = await getPopularSubreddits()
            setSubreddits(data.children)
        } catch (error) {
            console.log(error)
        }
    }
    getSubRedditList()
  }, [])

  const subredditsList = subreddits.map((subreddit) => {
    return (
      <Subreddit
        key={subreddit.data.id}
        data={subreddit.data}
        setData={setData}
      />
    )
  })

  return (
    <section className="subreddits_wrapper">
      <h2>Popular Communities</h2>
      <div className="subreddits_container">{subredditsList}</div>
    </section>
  )
}

export default Subreddits
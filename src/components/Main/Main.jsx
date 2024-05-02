import React, { useEffect, useState } from 'react'
import './Main.scss'
import Card from '../Card/Card'
import { getRedditData } from '../../api/api'
import Subreddits from '../Subreddits/Subreddits'

const Main = ({ data, setData, query }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const { data } = await getRedditData()
        setData(data.children)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [setData])

  const cardArr = data.map((redditData) => {
    return <Card key={redditData.data.id} data={redditData} />
  })

  return (
    <main className="main_wrapper">
      { !loading && data.length === 0 && (
        <div>
          <p>Search results for {query} does not exist</p>
        </div>
      )}
      {!loading && data.length > 0 && (
        <section className="main_container">{cardArr}</section>
      )}
      {loading && <p>Loading...</p>}
      <aside className="main_subreddits">
        <Subreddits setData={setData} />
      </aside>
    </main>
  )
}

export default Main
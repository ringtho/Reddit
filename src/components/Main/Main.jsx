import React, { useEffect, useState } from 'react'
import './Main.scss'
import Card from '../Card/Card'
import { getRedditData } from '../../api/api'
import Subreddits from '../Subreddits/Subreddits'

const Main = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getRedditData()
        setData(data.children)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const cardArr = data.map((redditData) => {
    // console.log(redditData)
    return <Card key={redditData.data.id} data={redditData} />
  })

  return (
    <main className='main_wrapper'>
      <section className='main_container'>{cardArr}</section>
      <aside className='main_subreddits'>
        <Subreddits setData={setData} />
      </aside>
    </main>
  )
}

export default Main
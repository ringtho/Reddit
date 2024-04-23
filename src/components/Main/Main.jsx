import React, { useEffect, useState } from 'react'
import './Main.scss'
import Card from '../Card/Card'
import { getRedditData } from '../../api/api'

const Main = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getRedditData()
        setData(data.data.children)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const cardArr = data.map((redditData) => {
    return <Card data={redditData} />
  })
  console.log(data)
  return (
    <main>
      {cardArr}
    </main>
  )
}

export default Main
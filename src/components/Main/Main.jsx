import React, { useEffect, useState } from 'react'
import './Main.scss'
import Card from '../Card/Card'
import { getRedditData } from '../../api/api'

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
    <main>
      {cardArr}
    </main>
  )
}

export default Main
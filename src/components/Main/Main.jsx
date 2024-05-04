import React from 'react'
import './Main.scss'
import Card from '../Card/Card'
import Subreddits from '../Subreddits/Subreddits'
import { useGetPostsQuery } from '../../api/services/postsData'

const Main = ({  setData, query, url, setUrl }) => {

  const {data, isLoading, isError } = useGetPostsQuery(url)
  const cardArr = data?.data?.children.map((redditData) => {
    return <Card key={redditData.data.id} data={redditData} />
  })

  return (
    <main className="main_wrapper">
      { !isLoading && data?.data?.children.length === 0 && (
        <div>
          <p>Search results for {query} does not exist</p>
        </div>
      )}
      {!isLoading && data?.data?.children.length > 0 && (
        <section className="main_container">{cardArr}</section>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <h2>An Error occurred. Please try again later</h2>}
      <aside className="main_subreddits">
        <Subreddits setData={setData} setUrl={setUrl} />
      </aside>
    </main>
  )
}

export default Main
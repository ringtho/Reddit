import React, { useEffect } from 'react'
import './Main.scss'
import Card from '../Card/Card'
import Subreddits from '../Subreddits/Subreddits'
import { useGetPostsQuery, useGetSearchResultsQuery } from '../../api/services/postsData'
import { useSelector } from 'react-redux'

const Main = () => {
  const { url, query } = useSelector((state) => state.postsData)
  const {
    data: postsData,
    isLoading: postsLoading,
    isError: postsError,
  } = useGetPostsQuery(url, { skip: !!query })
  const {
    data: searchResults,
    isLoading: searchResultsLoading,
    isError: searchResultsError,
  } = useGetSearchResultsQuery(query, { skip: !query })

  // const { data, isLoading, isError } = useGetPostsQuery(url, { skip: !!query })

  const data = query ? searchResults : postsData
  const isLoading = query ? searchResultsLoading : postsLoading
  const isError = query ? searchResultsError : postsError

  const cardArr = data?.data?.children.map((redditData) => {
    return <Card key={redditData.data.id} data={redditData} />
  })

  console.log('Query:', query, 'URL:', url, "isLoading:", isLoading)

  return (
    <main className="main_wrapper">
      {!isLoading && data?.data?.children.length > 0 && (
        <section className="main_container">{cardArr}</section>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <h2>An Error occurred. Please try again later</h2>}
      {!isLoading && data?.data?.children.length === 0 && (
        <p>No results found.</p>
      )}
      <aside className="main_subreddits">
        <Subreddits />
      </aside>
    </main>
  )
}

export default Main
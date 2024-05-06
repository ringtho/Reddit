import React from 'react'
import './Main.scss'
import Card from '../Card/Card'
import Subreddits from '../Subreddits/Subreddits'
import { useGetPostsQuery, useGetSearchResultsQuery } from '../../api/services/postsData'

const Main = ({ setQuery, query, url, setUrl }) => {
  const {
    data: postsData,
    isLoading: postsLoading,
    isError: postsError,
  } = useGetPostsQuery(query ? null : url)
  const {
    data: searchResults,
    isLoading: searchResultsLoading,
    isError: searchResultsError,
  } = useGetSearchResultsQuery(query)

  const data = query ? searchResults : postsData
  const isLoading = query ? searchResultsLoading : postsLoading
  const isError = query ? searchResultsError : postsError

  const cardArr = data?.data?.children.map((redditData) => {
    return <Card key={redditData.data.id} data={redditData} />
  })

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
        <Subreddits setUrl={setUrl} setQuery={setQuery} />
      </aside>
    </main>
  )
}

export default Main
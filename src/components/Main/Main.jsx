import React from 'react'
import './Main.scss'
import Card from '../Card/Card'
import Subreddits from '../Subreddits/Subreddits'
import { useGetPostsQuery, useGetSearchResultsQuery } from '../../api/services/postsData'
import { useSelector } from 'react-redux'
import CardSkeleton from '../CardSkeleton/CardSkeleton'
import NotFound from '../NotFound/NotFound'

const Main = () => {
  const { url, query } = useSelector((state) => state.postsData)
  
  const {
    data: postsData,
    isFetching: postsLoading,
    isError: postsError,
  } = useGetPostsQuery(url, { skip: !!query })
  const {
    data: searchResults,
    isFetching: searchResultsLoading,
    isError: searchResultsError,
  } = useGetSearchResultsQuery(query, { skip: !query })

  const data = query ? searchResults : postsData
  const isFetching = query ? searchResultsLoading : postsLoading
  const isError = query ? searchResultsError : postsError

  const posts = data?.data?.children || []

  const cardArr = posts?.map((redditData) => {
    return <Card key={redditData.data.id} data={redditData} />
  })

  return (
    <main className="main_wrapper">
      {!isFetching && posts.length > 0 && (
        <section className="main_container">
          {searchResults?.data?.children.length > 0 && !searchResultsLoading && (
            <p>Search Results for "{query}"</p>
          )}
          {cardArr}
        </section>
      )}
      {isFetching && <CardSkeleton cards={25} />}
      {isError && <h2>An Error occurred. Please try again later</h2>}
      {!isFetching && posts.length === 0 && <NotFound />}
      <aside className="main_subreddits">
        <Subreddits />
      </aside>
    </main>
  )
}

export default Main
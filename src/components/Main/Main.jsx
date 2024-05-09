import React from 'react'
import './Main.scss'
import Card from '../Card/Card'
import Subreddits from '../Subreddits/Subreddits'
import { useGetPostsQuery, useGetSearchResultsQuery } from '../../api/services/postsData'
import { useSelector, useDispatch } from 'react-redux'
import CardSkeleton from '../CardSkeleton/CardSkeleton'
import NotFound from '../NotFound/NotFound'
import { addAfter } from '../../api/features/postsSlice'
import InfiniteScroll from 'react-infinite-scroll-component'
import InfiniteLoader from '../InfiniteLoader/InfiniteLoader'
import Error from '../Error/Error'

const Main = () => {
  const { url, query, after } = useSelector((state) => state.postsData)
  const dispatch = useDispatch()
 
  const {
    data: postsData,
    isFetching: postsFetching,
    isLoading: postsLoading,
    isError: isPostsError,
    error: postsError
  } = useGetPostsQuery({url, after}, { skip: !!query })
  const {
    data: searchResults,
    isFetching: searchResultsFetching,
    isLoading: searchResultsLoading,
    isError: isSearchResultsError,
    error: searchResultsError,
  } = useGetSearchResultsQuery({ query, after }, { skip: !query })

  const data = query ? searchResults : postsData
  let isFetching = query ? searchResultsFetching : postsFetching
  const isLoading = query ? searchResultsLoading : postsLoading
  const isError = query ? isSearchResultsError : isPostsError
  const error = query ? searchResultsError : postsError

  console.log(error)

  const posts = data?.data?.children || []

  const cardArr = posts?.map((redditData, index) => {
    return <Card key={redditData.data.id} data={redditData} />
  })

  const fetchMoreData = () => {
    dispatch(addAfter(data.data.after))
  }

  return (
    <main className="main_wrapper">
      {posts.length > 0 && (
        <section className="main_container">
          {searchResults?.data?.children.length > 0 &&
            !searchResultsFetching && <p>Search Results for "{query}"</p>}
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={true}
            loader={isFetching && posts.length > 0 && <InfiniteLoader />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            className="infinite_scroll"
          >
            <div className="main_cards">{cardArr}</div>
          </InfiniteScroll>
        </section>
      )}
      {(isLoading || isFetching) && posts.length === 0 && (
        <CardSkeleton cards={25} />
      )}
      {isError && <Error error={error} />}
      {!isFetching && query && posts.length === 0 && <NotFound />}
      <aside className="main_subreddits">
        <Subreddits />
      </aside>
    </main>
  )
}

export default Main
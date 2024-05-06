import './Subreddits.scss'
import Subreddit from '../Subreddit/Subreddit'
import { useGetPopularSubredditsQuery } from '../../api/services/postsData'

const Subreddits = ({ setUrl, setQuery }) => {
  const {data, isLoading } = useGetPopularSubredditsQuery()

  const subredditsList = data?.data?.children?.map((subreddit) => {
    return (
      <Subreddit
        key={subreddit.data.id}
        data={subreddit.data}
        setUrl={setUrl}
        setQuery={setQuery}
      />
    )
  })

  return (
    <section className="subreddits_wrapper">
      {isLoading && <h2>Loading....</h2>}
      {!isLoading && (
        <>
          <h2>Popular Communities</h2>
          <div className="subreddits_container">{subredditsList}</div>
        </>
      )}
    </section>
  )
}

export default Subreddits
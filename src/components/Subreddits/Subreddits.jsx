import './Subreddits.scss'
import Subreddit from '../Subreddit/Subreddit'
import { useGetPopularSubredditsQuery } from '../../api/services/postsData'
import SubredditSkeleton from '../SubredditSkeleton/SubredditSkeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Subreddits = () => {
  const {data, isLoading } = useGetPopularSubredditsQuery()

  const subredditsList = data?.data?.children?.map((subreddit) => {
    return (
      <Subreddit
        key={subreddit.data.id}
        data={subreddit.data}
      />
    )
  })

  return (
    <section className="subreddits_wrapper">
      <h2>Popular Communities</h2>
      {isLoading && <SubredditSkeleton count={25} />}
      <>
        <div className="subreddits_container">{subredditsList}</div>
      </>
    </section>
  )
}

export default Subreddits
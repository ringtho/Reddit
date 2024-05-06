import React from 'react'
import './SubredditSkeleton.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SubredditSkeleton = ({ count }) => {
  const subredditsList = Array(count)
    .fill(0)
    .map((_, idx) => (
      <SkeletonTheme
        highlightColor="#1f2226"
        baseColor="#343A40"
        duration={1}
        key={idx}
      >
        <div className="subreddit_skeleton">
          <div className="subreddit_circle">
            <Skeleton circle height={40} width={40} />
          </div>
          <div className="subreddit_text">
            <Skeleton />
          </div>
        </div>
      </SkeletonTheme>
    ))
  return (
    <div>
        {subredditsList}
    </div>
  )
}

export default SubredditSkeleton
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import './CommentsSkeleton.scss'

const CommentsSkeleton = ({ comments }) => {
  const skeletonList = Array(comments)
    .fill(0)
    .map((_, idx) => (
      <div className="comments_skeleton" key={`Comments-${idx}`}>
        <div className="comments_skeleton_header">
          <Skeleton circle width={40} height={40} />
          <Skeleton width={100} />
        </div>
        <div>
          <Skeleton height={10} count={2} />
        </div>
        <div>
          <Skeleton height={20} />
        </div>
      </div>
    ))
  return (
    <SkeletonTheme
      highlightColor="#1f2226"
      baseColor="#343A40"
      duration={1}
    >
      <div className="comments_skeleton_wrapper">{skeletonList}</div>
    </SkeletonTheme>
  )
}

export default CommentsSkeleton
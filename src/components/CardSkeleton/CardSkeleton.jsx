import React from 'react'
import './CardSkeleton.scss'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

const CardSkeleton = ({ cards }) => {
  const skeletonList = Array(cards).fill(0).map((item, idx) => (
    <div className="card_skeleton" key={idx}>
      <div className="skeleton_header">
        <Skeleton circle width={40} height={40} />
        <Skeleton width={100} />
      </div>
      <div>
        <Skeleton height={30} />
      </div>
      <div>
        <Skeleton height={30} width={120} />
      </div>
      <div>
        <Skeleton height={300} />
      </div>
      <div>
        <Skeleton height={20} />
      </div>
    </div>
  ))
  return (
    <SkeletonTheme highlightColor="#1f2226" baseColor="#212529">
      <div className="skeleton_wrapper">{skeletonList}</div>
    </SkeletonTheme>
  )
}

export default CardSkeleton
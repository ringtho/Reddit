import React from 'react'
import './InfiniteLoader.scss'
import { BeatLoader } from 'react-spinners'

const InfiniteLoader = () => {
  return (
    <div className="infinite_container">
      <BeatLoader color="#495057" />
    </div>
  )
}

export default InfiniteLoader
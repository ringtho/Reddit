import React from 'react'
import './Error.scss'

const Error = ({ error }) => {
  const { error: errorType, status } = error
  return (
    <div className="error_container">
      {status ? (
        <h2>{errorType}</h2>
      ) : (
        <h2>An Error occurred. Please try again later</h2>
      )}
    </div>
  )
}

export default Error
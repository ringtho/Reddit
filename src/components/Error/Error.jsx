import React from 'react'
import './Error.scss'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const Error = ({ error }) => {
  let { error: errorType, status } = error

  errorType = "Type error"
  status = "FETCH ERROR"
  return (
    <div className="error_container">
        <div>
          <div className='error_header'>
            <ErrorOutlineIcon className='error_icon' />
            <h1>Opps, we having an issue from our side</h1>
            <p>Please try again later</p>
          </div>
          {status && <h2>{errorType}</h2>}
        </div>
    </div>
  )
}

export default Error
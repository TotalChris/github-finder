import React from 'react'
import spinnergif from './Assets/spinner.gif'
import PropTypes from 'prop-types'

function Spinner({ width }) {
  return (
    <div className='w-100'>
        <img src={spinnergif} width={width} alt="Loading..." className=''></img>
    </div>
  )
}

Spinner.propTypes = {
  width: PropTypes.number,
}

Spinner.defaultProps = {
  width: 100,
}

export default Spinner
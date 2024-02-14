import React from 'react'
import timeout from '../../assets/Timeout.png'
import './timeout.css'

function Timeout() {
  return (
    <div>
    <div className='image'>   <img src={timeout} alt="timeout" style={{ width: '150px', height: '150px' }} /> </div>  
    <h3 className='title'>Your session has expired</h3> 
    <p>Payment process has timed out. Please refresh the page.</p></div>
  )
}
export default Timeout;
import React from 'react';
import './PaymentFaild.css';
import fail from '../assets/fail.png';


function PaymentFaild() {
  return (
    <div className="container">
     <div>   <img src={fail} alt="fail" style={{ width: '150px', height: '150px' }} /> </div>   
     <h1>! Payment Faild</h1>   
    <h2> please contact the farmer and try again.  </h2>
    <p>Thank you for using lersha app!</p>


</div>
)
}

export default PaymentFaild;
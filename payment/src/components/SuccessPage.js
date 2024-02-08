import  { useEffect } from 'react';
import './successPage.css';
import Illustration from '../assets/Illustration.png';


function SuccessPage() {
  return (
    <div class="container">
    <div>   <img src={Illustration} alt="Image Description"/> </div>
    <h2>Paid Succesfully</h2>
    <p>Thank you for using lersha app</p>

</div>
)
}

export default SuccessPage;
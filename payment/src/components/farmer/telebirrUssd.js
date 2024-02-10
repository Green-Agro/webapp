import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import SuccessPage from '../SuccessPage';
import io from 'socket.io-client';
import PaymentFaild from '../paymentFaild';


function TelebirrUssd() {
  const [loading, setLoading] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFaild, setPaymentFaild] = useState(false);
  const [timeoutExpired, setTimeoutExpired] = useState(false); // State for timeout message


  const {id} = useParams();

  useEffect(() => {
    const socket = io('https://api.lersha.com', {
      query: { "order_id": `${id}` }
    });

    socket.on('PAID', (data) => {
      console.log('Event received:', data);
      if(data.success===200){
        setLoading(false);
        setPaymentSuccess(true);
      }else if(data.success===400){
        setLoading(false);
        setPaymentFaild(true);

      }
    
      

      // Redirect the user or perform any other actions
    });
    // socket.on('UNPAID', (data) => {
    //   console.log('Event received:', data);
    //   setLoading(false);
    //   setPaymentSuccess(false);
    //   setPaymentFaild(true);

    //   // Redirect the user or perform any other actions
    // });

    socket.on('connect', () => {
      console.log('WebSocket connection established.');
    });

    socket.on('disconnect', () => {
      console.log('WebSocket connection closed.');
      // Perform any necessary actions after the connection is closed
    });

    // Set a timeout of 10 seconds for the loading state
    const timeout = setTimeout(() => {
      setLoading(false);
      setTimeoutExpired(true);
    }, 120000);

    // Cleanup function to clear the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  });

  if (loading) {
    return <Loading />;
  }

  if (paymentSuccess) {
    return <SuccessPage />;
  }
  if (paymentFaild) {
    return <PaymentFaild />;
  }
  if (timeoutExpired) {
    return <div>
      <h1>! TIMEOUT</h1>
      <p>Payment process timed out. Please try again later.</p>
      </div>;
  }
}

export default TelebirrUssd;
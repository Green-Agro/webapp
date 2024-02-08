import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import SuccessPage from '../SuccessPage';
import io from 'socket.io-client';

function TelebirrUssd() {
  const [loading, setLoading] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const order_id = urlParams.get('id');

  useEffect(() => {
    const socket = io('http://164.160.187.141:7000', {
      query: { order_id: order_id }
    });

    socket.on('PAID', (data) => {
      console.log('Event received:', data);
      setPaymentSuccess(true);
      setLoading(false)
      // Redirect the user or perform any other actions
    });

    socket.on('connect', () => {
      console.log('WebSocket connection established.');
      setLoading(false);
    });

    socket.on('disconnect', () => {
      console.log('WebSocket connection closed.');
      // Perform any necessary actions after the connection is closed
    });

    
  }, [order_id]);

  if (loading) {
    return <Loading />;
  }

  if (paymentSuccess) {
    return <SuccessPage />;
  }

  //return <div>Other components...</div>;
}

export default TelebirrUssd;
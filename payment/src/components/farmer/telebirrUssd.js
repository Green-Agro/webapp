import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import SuccessPage from '../SuccessPage';
import io from 'socket.io-client';

function TelebirrUssd() {
  const [loading, setLoading] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  //console.log
  const {id} = useParams()

  useEffect(() => {
    const socket = io('http://164.160.187.141:7000', {
      query: { "order_id": `${id}` }
    });

    socket.on('PAID', (data) => {
      console.log('Event received:', data);
      setLoading(false)
      setPaymentSuccess(true);

      // Redirect the user or perform any other actions
    });

    socket.on('connect', () => {
      console.log('WebSocket connection established.');

    });

    socket.on('disconnect', () => {
      console.log('WebSocket connection closed.');
      // Perform any necessary actions after the connection is closed
    });

    
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (paymentSuccess) {
    return <SuccessPage />;
  }

  //return <div>Other components...</div>;
}

export default TelebirrUssd;
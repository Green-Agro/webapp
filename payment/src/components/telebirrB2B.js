import  { useEffect,useState } from 'react';
import './loader.css';

function TelebirrB2B() {
  const [error, setError] = useState(null);
  
  useEffect(() => {
      console.log("Use effect is running")
      const urlParams = new URLSearchParams(window.location.search);

      // Get the values from the URL query parameters
      const amount = urlParams.get('amount');
      const transactionId = urlParams.get('transaction_id');
      const shortCode = urlParams.get('short_code');
      const merchant_app_id = urlParams.get('merchant_app_id');
      console.log(amount,"amount")
      console.log(transactionId,"transactionId")

      console.log(shortCode,"shortCode")

      console.log(merchant_app_id,"merchant_app_id")

      
     
      const formattedAmount = parseFloat(amount).toFixed(2).toString();

      
      fetch("http://196.189.118.76:8000/api/telebirr/pay", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Payment request",
          amount: formattedAmount,
          transaction_id: transactionId,
          short_code: shortCode,
          merchant_app_id: merchant_app_id,
        }),
      })
        .then((response) => {
          
          console.log(response)
          window.open(response.url.trim(), "_self");
        })
        .catch((err) => console.log("ERROR: ", err));
        //setError("An error occurred while processing the payment. Please try again later.");
  }, []);

  return (
    <div className="container">
    {error ? (
      <div className="error-message">{error}</div>
    ) : (
      <>
        <div className="loader"></div>
        <h2>Redirecting to the payment page...</h2>
      </>
    )}
  </div>
  );
}

export default TelebirrB2B;
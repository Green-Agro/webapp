import  { useEffect,useState } from 'react';
import axios from 'axios'
import './loader.css';
import { redirect } from 'react-router-dom';

function TelebirrB2B() {
  const [error, setError] = useState(null);
  
  console.log("Use effect is running")
  const urlParams = new URLSearchParams(window.location.search);

  // Get the values from the URL query parameters
  const amount = urlParams.get('amount');
  const transactionId = urlParams.get('transaction_id');
  const shortCode = urlParams.get('short_code');
  const merchant_app_id = urlParams.get('merchant_app_id');
  const [url,seturl]=useState('')
  console.log(amount,"amount")
  console.log(transactionId,"transactionId")
  const formattedAmount = parseFloat(amount).toFixed(2).toString();

  
  const handleFetCH = () => {
    console.log("fetch");
  
    const errors = [];
  
    // Check if formattedAmount field is empty
    if (!amount) {
      errors.push("Amount field is required");
    }
  
    // Check if transactionId field is empty
    if (!transactionId) {
      errors.push("Transaction ID field is required");
    }
  
    // Check if shortCode field is empty
    if (!shortCode) {
      errors.push("Short Code field is required");
    }
  
    // Check if merchant_app_id field is empty
    if (!merchant_app_id) {
      errors.push("Merchant App ID field is required");
    }
  
    // If there are any errors, set the error state and return
    if (errors.length > 0) {
      const errorMessage = errors.join(", ");
      console.error("Errors:", errorMessage);
      setError(errorMessage);
      return;
    }
  
    try {
      axios
        .post("http://196.189.118.76:3000/api/telebirr/pay", {
          title: "Payment request",
          amount: formattedAmount,
          transaction_id: transactionId,
          merchant_short_code: shortCode,
          merchant_app_id: merchant_app_id,
        })
        .then((response) => {
          console.log("response", response.data);
          window.open(response.data.url.trim(), "_self");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error.toString());
        });
    } catch (e) {
      console.log("error:", e);
      setError(e.toString());
    }
  };
  
  useEffect(() => {
    handleFetCH()
//       try {
//       let response = fetch("", {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title: "Payment request",
//           amount: formattedAmount,
//           transaction_id: transactionId,
//           merchant_short_code: shortCode,
//           merchant_app_id: merchant_app_id,
          
//         }),
//       })
//         .then((response) => {
          
//           console.log(response)
//           setsuccess(true);
//           console.log("success",success);
//           //redirect(response.url.trim())
//           //window.open(response.url.trim(), "_self");
         
          
//         })
//         .catch((err) => console.log("ERROR: ", err));
//       }catch(e){
// console.log("error ::", e);
//       }

      //  setError("An error occurred while processing the payment. Please try again later.");
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
//import React from "react";
import TelebirrUssd from "./components/farmer/telebirrUssd";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import TelebirrB2B from "./components/telebirrB2B";
import PaymentFaild from "./components/paymentFaild";
import Timeout from "./components/farmer/timeout";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={< TelebirrB2B/>} />
        <Route path="/telebirr/:id" element={<TelebirrUssd />} /> 
        <Route path="/pay"element={<PaymentFaild></PaymentFaild>}/>
        <Route path="/timeout" element={<Timeout></Timeout>} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;

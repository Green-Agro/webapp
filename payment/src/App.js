//import React from "react";
import SuccessPage from "./components/SuccessPage";
import { useEffect } from "react";
import TelebirrUssd from "./components/farmer/telebirrUssd";
import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import TelebirrB2B from "./components/telebirrB2B";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={< TelebirrB2B/>} />
        <Route path="/telebirr/:id" element={<TelebirrUssd />} /> 
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;

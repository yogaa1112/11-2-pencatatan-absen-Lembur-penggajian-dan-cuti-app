// File: App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

function Message1() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <h1>{message}</h1>;
}

// function Message2() {
//   const [message, setMessage] = useState("");

//   // ... rest of your code
// }

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/message1" element={<Message1 />} />
  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
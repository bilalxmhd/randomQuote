import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";



function App() {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  
  

  async function handleQuote() {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
    setAuthor(data.author);
  }

  useEffect(() => {
    handleQuote();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Quote of the day</h1>
        <div className="content">
          <FaQuoteLeft size="20" style={{ marginRight: "10px" }} />
          <h2 id="text">{quote}</h2>
          <FaQuoteRight size="20" style={{ marginLeft: "10px" }} />
          <h4 id="author">-- {author}</h4>
        </div>
        <div className="button-position">
          <button onClick={handleQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;

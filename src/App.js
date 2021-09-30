import React, { useState, useEffect } from "react";
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Welcome to by site");

  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  });

  const handleChange = () => {
    setName("Thanks to joining");
  };
  const handleCount = () => {
    setCount(count + 5);
  };
  return (
    <div>
      {data.map((item) => (
        <div className="main_data">
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
      <h1>Updated working</h1>
      <h1>{name}</h1>
      <button onClick={handleChange}>Join</button>
      <h1>We are learning React js from Here</h1>
      <h1>{count}</h1>
      <button onClick={handleCount}>Count Click</button>
    </div>
  );
};

export default App;

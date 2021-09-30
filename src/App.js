import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Welcome to by site");

  const handleChange = () => {
    setName("Thanks to joining");
  };
  const handleCount = () => {
    setCount(count + 5);
  };
  return (
    <div>
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

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/counter")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCount(data.counter);
      });
  }, []);

  const handleIncrement = () => {
    fetch("http://localhost:3000/counter", {
      method: "PUT",
      body: JSON.stringify({ counter: count + 1 }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCount(data.counter);
      });
  };

  const handleDecrement = () => {
    fetch("http://localhost:3000/counter", {
      method: "PUT",
      body: JSON.stringify({ counter: count - 1 }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCount(data.counter);
      });
  };

  return (
    <>
      <div className="container">
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
};

export default Counter;

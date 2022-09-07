import { useState } from "React";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
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

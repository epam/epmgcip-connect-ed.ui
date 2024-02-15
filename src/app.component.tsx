import { useState } from "react";
import "./app.styles.css";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(previous => previous + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

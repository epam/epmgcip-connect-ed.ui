import { useState } from "react";
import { Button } from "@/components/button/button.tsx";
import "./app.styles.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(previous => previous + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="button" variant="primary" onClick={handleClick}>
          count is {count}
        </Button>
        <Button type="button" variant="outline" onClick={handleClick}>
          count is {count}
        </Button>
        <Button type="button" variant="secondary" onClick={handleClick}>
          count is {count}
        </Button>
        <Button type="button" variant="pale" onClick={handleClick}>
          count is {count}
        </Button>
        <Button type="button" variant="nav" onClick={handleClick}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

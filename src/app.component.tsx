import { useState } from "react";
import { Button } from "@/components/button/button.tsx";
import { Footer } from "@/components/footer/footer.tsx";
import { Navigation } from "@/components/navigation/navigation.tsx";
import "./app.styles.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(previous => previous + 1);
  };

  return (
    <div className="page">
      <Navigation />
      <main className="card">
        <Button type="button" variant="main" onClick={handleClick}>
          count is {count}
        </Button>
        <Button type="button" variant="inverted" onClick={handleClick}>
          count is {count}
        </Button>
        <Button type="button" variant="outline" onClick={handleClick}>
          count is {count}
        </Button>
        <Button type="button" variant="form" onClick={handleClick}>
          count is {count}
        </Button>
        <Button type="button" variant="nav" onClick={handleClick}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </main>
      <Footer />
    </div>
  );
};

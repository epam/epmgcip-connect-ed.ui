import { useState } from "react";
import { Button } from "@/components/button/button.tsx";
import { EmbeddedSection } from "@/components/embedded-section/embedded-section.tsx";
import { Footer } from "@/components/footer/footer.tsx";
import { Hero } from "@/components/hero/hero.tsx";
import { Iframe } from "@/components/iframe/iframe.tsx";
import { Navigation } from "@/components/navigation/navigation.tsx";
import bannerImage from "@/assets/images/banner.png";
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
        <Hero
          title="We provide quality education for every child through digital empowerment."
          body="Connect-Ed works to achieve digital equality and unleash the full potential of all children in Kazakhstan. We are committed to provide equal educational opportunities for every child."
          bannerSource={bannerImage}
        />
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
        <EmbeddedSection title="How we've helped">
          <Iframe src="https://www.google.com/search?igu=1" />
        </EmbeddedSection>
        <EmbeddedSection title="Video">
          <video controls aria-label="embedded video">
            <source src="" />
          </video>
        </EmbeddedSection>
      </main>
      <Footer />
    </div>
  );
};

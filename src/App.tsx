import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Article from "./components/article";

function App() {
  return (
    <>
      <section id="center">
        <Article
          name="Hasan"
          desc="Learn React with Hasan"
          tags={["react", "javascript", "frontend", "web"]}
        />
      </section>
    </>
  );
}

export default App;

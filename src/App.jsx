import { useState } from "react";

import "./App.css";
import Trends from "./components/Trends";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="pt-8 pb-20 px-4 ">
      <Hero />
      <Trends />
    </div>
  );
}

export default App;

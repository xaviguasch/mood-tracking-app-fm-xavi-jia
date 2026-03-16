import { useState } from "react";

import "./App.css";
import Trends from "./components/Trends";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="pt-8 pb-20 px-4 ">
      <Header />
      <Hero />
      <Trends />
    </div>
  );
}

export default App;

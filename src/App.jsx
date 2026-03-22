import "./App.css";
import Averages from "./components/averages/Averages";
import Trends from "./components/Trends";
import Hero from "./components/Hero";
import Header from "./components/Header";
import { useEffect } from "react";
import { initStorage } from "./util/storage";

function App() {
  useEffect(() => {
    initStorage();
  }, []);

  return (
    <div className="max-w-292.5 px-4  md:px-8 lg:px-0 mt-8 mx-auto ">
      <Header />
      <Hero />
      <div className="pt-8 pb-20 px-4 ">
        <Averages />
        <Trends />
      </div>
    </div>
  );
}

export default App;

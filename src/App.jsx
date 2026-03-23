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
    <div className="max-w-292.5 px-4 md:px-8 xl:px-0 pt-8 md:pt-10 pb-20 mx-auto flex flex-col justify-start gap-16">
      <div className="flex flex-col gap-12">
        <Header />
        <Hero />
      </div>
      <div className="flex flex-col gap-8 xl:flex-row">
        <Averages />
        <Trends />
      </div>
    </div>
  );
}

export default App;

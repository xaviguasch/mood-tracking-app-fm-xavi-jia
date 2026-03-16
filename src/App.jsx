import "./App.css";
import Averages from "./components/averages/Averages";
import Trends from "./components/Trends";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-292.5 px-4 sm:px-8 md:px-16 lg:px-33.75 mt-8 sm:mt-10 mx-auto ">
      <Header />
      <Averages />
      <div className="pt-8 pb-20 px-4 ">
        <Hero />
        <Trends />
      </div>
    </div>
  );
}

export default App;

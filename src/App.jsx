import "./App.css";
import Averages from "./components/averages/Averages";
import Trends from "./components/Trends";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-292.5 px-4  md:px-8 lg:px-0 mt-8 mx-auto ">
      <Header />
      <Hero />

      <div>
        <Averages />
        <Trends />
      </div>
    </div>
  );
}

export default App;

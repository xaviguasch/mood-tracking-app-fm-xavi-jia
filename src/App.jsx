import "./App.css";
import Averages from "./components/averages/Averages";
import Trends from "./components/Trends";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-292.5 px-4 md:px-8 xl:px-0 mt-8 sm:mt-10 mx-auto ">
      <Header />
      <Hero />
      <div className="h-113.5 my-16 flex lg:flex-row gap-8 lg:items-stretch">
        <div className="h-full lg:max-w-92.5 lg:shrink-0">
          <Averages />
        </div>

        <div className="h-full">
          <Trends />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Averages from "./components/averages/Averages";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-[1170px] px-[16px] sm:px-[32px] md:px-[64px] lg:px-[135px] mt-[32px] sm:mt-[40px] mx-auto ">
      <Header />
      <Averages />
    </div>
  );
}

export default App;

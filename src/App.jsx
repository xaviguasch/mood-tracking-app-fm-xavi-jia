import { useState } from "react";

import "./App.css";
import Averages from "./components/averages/Averages";
import Trends from "./components/Trends";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsOpen] = useState(false);

  console.log(isModalOpen);

  return (
    <div className="max-w-292.5 px-4  md:px-8 lg:px-0 mt-8 mx-auto ">
      <Header />
      <Hero onOpenForm={() => setIsOpen(true)} />
      <Averages />

      <div>
        <Averages />
        <Trends />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-dark-black/70 flex items-start justify-center z-50 pt-[70px] px-5 overflow-y-auto">
          <Modal onIsModalOpen={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import MultiStepModal from "../ui/MultiStepModal";

function Hero() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <MultiStepModal isOpen={isOpen} onClose={() => setIsopen(false)} />

      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-bright-blue-text font-bold text-2xl">
            Hello, Lisa!
          </h2>
          <h1 className="text-preset-1-mobile text-center">
            How are you feeling today?
          </h1>

          <span className="text-preset-6 text-light-grey-text">
            Wednesday, April 16th, 2025
          </span>
        </div>

        <button
          onClick={() => setIsopen(true)}
          className="text-preset-5 text-white-text bg-bright-blue-btn px-8 py-4 rounded-[10px]"
        >
          Log today's mood
        </button>
      </div>
    </>
  );
}

export default Hero;

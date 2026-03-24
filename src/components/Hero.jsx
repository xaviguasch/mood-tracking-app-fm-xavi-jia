import { useState } from "react";
import MultiStepModal from "../ui/MultiStepModal";

import { getData } from "../util/storage";
import DailyPanel from "../ui/DailyPanel";

function Hero() {
  const [isOpen, setIsopen] = useState(false);

  const dataFromLocalStorage = getData().moodEntries;
  const moodQuotes = getData().moodQuotes;

  const lastEntry = dataFromLocalStorage[dataFromLocalStorage.length - 1];

  function isToday(entry) {
    const createdDate = new Date(entry.createdAt);
    const today = new Date();

    return (
      createdDate.getFullYear() === today.getFullYear() &&
      createdDate.getMonth() === today.getMonth() &&
      createdDate.getDate() === today.getDate()
    );
  }

  const isTheLastDateFromToday = isToday(lastEntry);

  return (
    <>
      <MultiStepModal isOpen={isOpen} onClose={() => setIsopen(false)} />

      <div className="flex flex-col gap-12  items-center">
        <div className="flex flex-col gap-4 md:gap-2.5 items-center">
          <h2 className="text-bright-blue-text font-bold text-preset-3">
            Hello, Lisa!
          </h2>
          <h1 className="text-preset-1  text-center">
            How are you feeling today?
          </h1>

          <span className="text-preset-6 text-light-grey-text">
            Wednesday, April 16th, 2025
          </span>
        </div>

        {isTheLastDateFromToday ? (
          <DailyPanel lastEntry={lastEntry} moodQuotes={moodQuotes} />
        ) : (
          <button
            onClick={() => setIsopen(true)}
            className="text-preset-5 text-white-text bg-bright-blue-btn px-8 py-4 rounded-[10px] cursor-pointer"
          >
            Log today's mood
          </button>
        )}
      </div>
    </>
  );
}

export default Hero;

import React, { useState } from "react";

import veryHappyIcon from "../assets/images/icon-very-happy-white.svg";
import happyIcon from "../assets/images/icon-happy-white.svg";
import neutralIcon from "../assets/images/icon-neutral-white.svg";
import sadIcon from "../assets/images/icon-sad-white.svg";
import verySadIcon from "../assets/images/icon-very-sad-white.svg";

const LEVEL_HEIGHT = 56;

// Map mood values to icons
const moodIcons = {
  "-2": verySadIcon,
  "-1": sadIcon,
  0: neutralIcon,
  1: happyIcon,
  2: veryHappyIcon,
};

// Map mood values to labels
const moodLabels = {
  "-2": "Very Sad",
  "-1": "Sad",
  0: "Neutral",
  1: "Happy",
  2: "Very Happy",
};

function SleepBar({ entry }) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate bar height based on sleep hours
  const getHeight = (hours) => {
    if (hours >= 9) return LEVEL_HEIGHT * 5;
    if (hours >= 7) return LEVEL_HEIGHT * 4;
    if (hours >= 5) return LEVEL_HEIGHT * 3;
    if (hours >= 3) return LEVEL_HEIGHT * 2;
    return LEVEL_HEIGHT;
  };

  // Determine bar color based on mood
  const getColor = (mood) => {
    if (mood === 2) return "bg-light-amber";
    if (mood === 1) return "bg-light-green";
    if (mood === 0) return "bg-light-blue";
    if (mood === -1) return "bg-light-indigo";
    if (mood === -2) return "bg-light-red";
    return "bg-gray-300";
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && entry && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-60 p-3 bg-white border border-translucid-line rounded-[10px] z-50 shadow-md flex flex-col gap-3">
          <div className="flex flex-col justify-start items-start gap-1.5">
            <span className="text-preset-8">Mood:</span>
            <span className="text-preset-9 flex items-center gap-1">
              <img
                src={moodIcons[entry.mood]}
                alt={moodLabels[entry.mood]}
                className="w-6 h-6"
              />
              {moodLabels[entry.mood]}
            </span>
          </div>

          <div className="flex flex-col justify-start items-start gap-1.5">
            <span className="text-preset-8">Sleep:</span>
            <span className="text-preset-9">{entry.sleepHours}+ hours</span>
          </div>

          <div className="flex flex-col justify-start items-start gap-1.5">
            <span className="text-preset-8">Reflection:</span>
            <span className="text-preset-9">{entry.journalEntry}</span>
          </div>

          <div className="flex flex-col justify-start items-start gap-1.5">
            <span className="text-preset-8">Tags:</span>
            <span className="text-preset-9">{entry.feelings.join(", ")}</span>
          </div>
        </div>
      )}

      <div
        style={{ height: `${getHeight(entry.sleepHours)}px` }}
        className={`w-10 rounded-full cursor-pointer flex items-start justify-center pt-1.5 text-xl ${getColor(
          entry.mood
        )}`}
      >
        <img
          src={moodIcons[entry.mood]}
          alt={moodLabels[entry.mood]}
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}

export default SleepBar;

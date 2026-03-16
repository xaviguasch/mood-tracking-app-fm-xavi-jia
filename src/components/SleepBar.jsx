import React from "react";

import veryHappyIcon from "../assets/images/icon-very-happy-white.svg";
import happyIcon from "../assets/images/icon-happy-white.svg";
import neutralIcon from "../assets/images/icon-neutral-white.svg";
import sadIcon from "../assets/images/icon-sad-white.svg";
import verySadIcon from "../assets/images/icon-very-sad-white.svg";

const LEVEL_HEIGHT = 56;

const moodEmoji = {
  "-2": <img src={verySadIcon} />,
  "-1": <img src={sadIcon} />,
  0: <img src={neutralIcon} />,
  1: <img src={happyIcon} />,
  2: <img src={veryHappyIcon} />,
};

function SleepBar({ entry }) {
  const getHeight = (hours) => {
    if (hours >= 9) return LEVEL_HEIGHT * 5;
    if (hours >= 7) return LEVEL_HEIGHT * 4;
    if (hours >= 5) return LEVEL_HEIGHT * 3;
    if (hours >= 3) return LEVEL_HEIGHT * 2;
    return LEVEL_HEIGHT;
  };

  const getColor = () => {
    if (entry.mood === 2) return "bg-light-amber";
    if (entry.mood === 1) return "bg-light-green";
    if (entry.mood === 0) return "bg-light-blue";
    if (entry.mood === -1) return "bg-light-indigo";
    if (entry.mood === -2) return "bg-light-red";
  };

  return (
    <div
      style={{ height: `${getHeight(entry.sleepHours)}px` }}
      className={`w-10 rounded-full flex items-start justify-center pt-1.5 text-xl ${getColor()}`}
    >
      {moodEmoji[entry.mood]}
    </div>
  );
}

export default SleepBar;

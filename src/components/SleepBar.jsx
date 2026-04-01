import { useRef, useState, useEffect } from "react";

import veryHappyWhiteIcon from "../assets/images/icon-very-happy-white.svg";
import happyWhiteIcon from "../assets/images/icon-happy-white.svg";
import neutralWhiteIcon from "../assets/images/icon-neutral-white.svg";
import sadWhiteIcon from "../assets/images/icon-sad-white.svg";
import verySadWhiteIcon from "../assets/images/icon-very-sad-white.svg";

import veryHappyColorIcon from "../assets/images/icon-very-happy-color.svg";
import happyColorIcon from "../assets/images/icon-happy-color.svg";
import neutralColorIcon from "../assets/images/icon-neutral-color.svg";
import sadColorIcon from "../assets/images/icon-sad-color.svg";
import verySadColorIcon from "../assets/images/icon-very-sad-color.svg";

const LEVEL_HEIGHT = 56;

const moodWhiteIcons = {
  "-2": verySadWhiteIcon,
  "-1": sadWhiteIcon,
  0: neutralWhiteIcon,
  1: happyWhiteIcon,
  2: veryHappyWhiteIcon,
};

const moodColorIcons = {
  "-2": verySadColorIcon,
  "-1": sadColorIcon,
  0: neutralColorIcon,
  1: happyColorIcon,
  2: veryHappyColorIcon,
};

const moodLabels = {
  "-2": "Very Sad",
  "-1": "Sad",
  0: "Neutral",
  1: "Happy",
  2: "Very Happy",
};

function SleepBar({ entry, containerRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const [popoverSide, setPopoverSide] = useState("right");
  const [isHoverSupported, setIsHoverSupported] = useState(false);

  const barRef = useRef();

  // Detect hover capability
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");

    const updateHoverSupport = () => {
      setIsHoverSupported(mediaQuery.matches);
    };

    updateHoverSupport();
    mediaQuery.addEventListener("change", updateHoverSupport);

    return () => {
      mediaQuery.removeEventListener("change", updateHoverSupport);
    };
  }, []);

  // Close tooltip when clicking outside (mobile UX)
  useEffect(() => {
    if (isHoverSupported) return;

    function handleClickOutside(e) {
      if (barRef.current && !barRef.current.contains(e.target)) {
        setIsHovered(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isHoverSupported]);

  const getHeight = (hours) => {
    if (hours >= 9) return LEVEL_HEIGHT * 5;
    if (hours >= 7) return LEVEL_HEIGHT * 4;
    if (hours >= 5) return LEVEL_HEIGHT * 3;
    if (hours >= 3) return LEVEL_HEIGHT * 2;
    return LEVEL_HEIGHT;
  };

  const getColor = (mood) => {
    if (mood === 2) return "bg-light-amber";
    if (mood === 1) return "bg-light-green";
    if (mood === 0) return "bg-light-blue";
    if (mood === -1) return "bg-light-indigo";
    if (mood === -2) return "bg-light-red";
    return "bg-gray-300";
  };

  function handleMouseEnter() {
    if (!isHoverSupported) return;

    if (!isHovered && barRef.current && containerRef.current) {
      const barRect = barRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const spaceOnRight = containerRect.right - barRect.right;
      const containerWidth = 180;

      setPopoverSide(spaceOnRight < containerWidth ? "left" : "right");
    }

    setIsHovered(true);
  }

  function handleMouseLeave() {
    if (!isHoverSupported) return;
    setIsHovered(false);
  }

  // Mobile click handler
  function handleClick() {
    if (isHoverSupported) return;

    if (!isHovered && barRef.current && containerRef.current) {
      const barRect = barRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const spaceOnRight = containerRect.right - barRect.right;
      const containerWidth = 180;

      setPopoverSide(spaceOnRight < containerWidth ? "left" : "right");
    }

    setIsHovered((prev) => !prev);
  }

  return (
    <div
      ref={barRef}
      className="relative flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // mobile only behavior inside handler
    >
      {isHovered && entry && (
        <div
          className={`absolute bottom-2
          ${
            popoverSide === "left"
              ? "right-0 translate-x-[-25%]"
              : "left-0 translate-x-[25%]"
          }
          w-[175px] p-3 bg-white border
          border-translucid-line rounded-[10px] z-50 shadow-md flex flex-col gap-3.5`}
        >
          <div className="flex flex-col gap-1.5">
            <span className="text-preset-8 text-light-grey-text">Mood</span>
            <span className="text-preset-7 text-dark-text flex items-center gap-1">
              <img
                src={moodColorIcons[entry.mood]}
                alt={moodLabels[entry.mood]}
                className="w-4 h-4"
              />
              {moodLabels[entry.mood]}
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-preset-8 text-light-grey-text">Sleep</span>
            <span className="text-preset-7 text-dark-text">
              {entry.sleepHours}+ hours
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-preset-8 text-light-grey-text">
              Reflection
            </span>
            <span className="text-preset-9 text-dark-text">
              {entry.journalEntry}
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-preset-8 text-light-grey-text">Tags</span>
            <span className="text-preset-9 text-dark-text">
              {entry.feelings.join(", ")}
            </span>
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
          src={moodWhiteIcons[entry.mood]}
          alt={moodLabels[entry.mood]}
          className="w-7.5 h-7.5"
        />
      </div>
    </div>
  );
}

export default SleepBar;

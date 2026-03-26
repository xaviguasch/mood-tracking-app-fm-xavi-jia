import { useState } from "react";

import veryHappyIcon from "../assets/images/icon-very-happy-color.svg";
import happyIcon from "../assets/images/icon-happy-color.svg";
import neutralIcon from "../assets/images/icon-neutral-color.svg";
import sadIcon from "../assets/images/icon-sad-color.svg";
import verySadIcon from "../assets/images/icon-very-sad-color.svg";
import infoCircleIcon from "../assets/images/icon-info-circle.svg";

const moods = [
  { type: "Very Happy", value: 2, icon: veryHappyIcon },
  { type: "Happy", value: 1, icon: happyIcon },
  { type: "Neutral", value: 0, icon: neutralIcon },
  { type: "Sad", value: -1, icon: sadIcon },
  { type: "Very Sad", value: -2, icon: verySadIcon },
];

function MoodStep({ selectedMood, setSelectedMood, onNext }) {
  const [localMood, setLocalMood] = useState(selectedMood);
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (localMood === null || localMood === undefined) {
      setError("Please select a mood before continuing.");
      return;
    }
    setSelectedMood(localMood);

    setError("");
    onNext();
  };

  return (
    <div className="text-dark-text flex flex-col justify-start items-start gap-8">
      <h3 className="text-preset-mood">How was your mood today?</h3>

      <div className="flex flex-col gap-2.5 w-full">
        {moods.map((mood) => (
          <label
            key={mood.type}
            className={`flex items-center justify-between w-full h-15.5 px-6 bg-white-text rounded-xl cursor-pointer border-2 
              ${
                localMood === mood.type
                  ? "border-[var(--color-blue-600)]"
                  : "border-translucid-line"
              }`}
          >
            <div className="flex items-center gap-2.5">
              <input
                type="radio"
                name="mood"
                value={mood.value}
                checked={localMood === mood.value}
                onChange={() => {
                  setLocalMood(mood.value);
                  setError("");
                }}
              />

              <span className="text-preset-5">{mood.type}</span>
            </div>

            <img src={mood.icon} alt={mood.type} className="w-9.5 h-9.5" />
          </label>
        ))}
      </div>

      {error && (
        <p className="mb-3 text-preset-7 text-[var(--color-red-700)] flex gap-1.5">
          <img src={infoCircleIcon} />
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleContinue}
        className="text-preset-4 w-full h-16.5 bg-bright-blue-btn rounded-xl text-white-text"
      >
        Continue
      </button>
    </div>
  );
}

export default MoodStep;

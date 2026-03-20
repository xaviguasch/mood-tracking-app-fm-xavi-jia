import { useState } from "react";

import infoCircleIcon from "../assets/images/icon-info-circle.svg";

const feelingsList = [
  "Joyful",
  "Down",
  "Anxious",
  "Calm",
  "Excited",
  "Frustrated",
  "Lonely",
  "GrateFul",
  "Overwhelmed",
  "Motivated",
  "Irritable",
  "Peaceful",
  "Tired",
  "Hopeful",
  "Confident",
  "Stressed",
  "Content",
  "Disappointed",
  "Optimistic",
  "Restless",
];

function FeelingStep({ selectedFeelings, setSelectedFeelings, onNext }) {
  const [localSelection, setLocalSelection] = useState(selectedFeelings);
  const [error, setError] = useState("");

  function handleCheckbox(feeling) {
    if (localSelection.includes(feeling)) {
      setLocalSelection(localSelection.filter((f) => f !== feeling));
    } else {
      setLocalSelection([...localSelection, feeling]);
    }

    setError("");
  }

  function handleContinue() {
    if (localSelection.length === 0) {
      setError("Please select at least one feeling before continuing.");
      return;
    }

    if (localSelection.length > 3) {
      setError("You can only select a maximum of 3 tags.");
      return;
    }

    setSelectedFeelings(localSelection);
    setError("");
    onNext();
  }

  return (
    <div className="text-dark-text">
      <h3 className="text-preset-3 mb-2">How did you feel?</h3>
      <p className="text-preset-6 text-light-grey-text mb-8">
        Select up to three tags:
      </p>

      <div className="mb-8 flex gap-4 flex-wrap">
        {feelingsList.map((feeling) => {
          const isChecked = localSelection.includes(feeling);

          return (
            <label
              key={feeling}
              className={`py-2 px-4 rounded-xl bg-trends-background border-2 ${isChecked ? "border-[var(--color-blue-600)]" : "border-translucid-line"} flex gap-2`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckbox(feeling)}
              />
              <span className="text-preset-6-regular">{feeling}</span>
            </label>
          );
        })}
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
        className=" text-preset-4 w-full h-16.5 bg-bright-blue-btn rounded-xl text-white-text"
      >
        Continue
      </button>
    </div>
  );
}

export default FeelingStep;

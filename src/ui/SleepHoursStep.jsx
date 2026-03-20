import { useState } from "react";

import infoCircleIcon from "../assets/images/icon-info-circle.svg";

const sleepHours = [
  "9+ hours",
  "7-8 hours",
  "5-6 hours",
  "3-4 hours",
  "0-2 hours",
];

function SleepHoursStep({ selectedHours, setSelectedHours, onSubmitStep }) {
  const [localSleepHours, setLocalSleepHours] = useState(selectedHours || "");
  const [error, setError] = useState("");

  function handleContinue(e) {
    e.preventDefault();

    if (!localSleepHours) {
      setError("Please select how many hours you slept before submiting.");
      return;
    }

    onSubmitStep({ sleepHours: localSleepHours });
  }

  return (
    <div className="text-dark-text">
      <h3 className="text-preset-3 mb-8">
        How many hours did you sleep last night?
      </h3>

      <div className="mb-8 flex flex-col gap-2.5">
        {sleepHours.map((hours) => (
          <label
            key={hours}
            className={`flex items-center gap-2.5 w-full h-15.5 px-6 bg-white-text rounded-xl 
              cursor-pointer border-2 
              ${localSleepHours === hours ? "border-[var(--color-blue-600)]" : "border-translucid-line"}
             `}
          >
            <input
              type="radio"
              name="sleepHours"
              value={hours}
              checked={localSleepHours === hours}
              onChange={() => {
                setLocalSleepHours(hours);
                setError("");
              }}
            />
            <span className="text-preset-5">{hours}</span>
          </label>
        ))}
      </div>

      {error && (
        <p className="mb-3 text-preset-7 text-[var(--color-red-700)] flex gap-1.5">
          <img src={infoCircleIcon} alt="error" />
          {error}
        </p>
      )}

      <button
        type="submit"
        onClick={handleContinue}
        className=" text-preset-4 w-full h-16.5 bg-bright-blue-btn rounded-xl text-white-text"
      >
        Submit
      </button>
    </div>
  );
}

export default SleepHoursStep;

import { useState } from "react";

import infoCircleIcon from "../assets/images/icon-info-circle.svg";

const sleepOptions = [
  { label: "9+ hours", value: 9 },
  { label: "7-8 hours", value: 7.5 },
  { label: "5-6 hours", value: 5.5 },
  { label: "3-4 hours", value: 3.5 },
  { label: "0-2 hours", value: 2 },
];

function SleepHoursStep({ onSubmitStep }) {
  const [localSleepHours, setLocalSleepHours] = useState("");
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
        {sleepOptions.map((option) => (
          <label
            key={option.label}
            className={`flex items-center gap-2.5 w-full h-15.5 px-6 bg-white-text rounded-xl 
              cursor-pointer border-2 
              ${
                localSleepHours === option.label
                  ? "border-[var(--color-blue-600)]"
                  : "border-translucid-line focus-within:border-(--color-blue-600)"
              }
             `}
          >
            <input
              className="custom-radio"
              type="radio"
              name="sleepHours"
              value={option.value}
              checked={localSleepHours === option.value}
              onChange={() => {
                setLocalSleepHours(option.value);
                setError("");
              }}
            />
            <span className="text-preset-5">{option.label}</span>
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
        className=" text-preset-4 w-full h-16.5 bg-bright-blue-btn rounded-xl text-white-text focus-style"
      >
        Submit
      </button>
    </div>
  );
}

export default SleepHoursStep;

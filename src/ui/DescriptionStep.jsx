import { useState } from "react";

import infoCircleIcon from "../assets/images/icon-info-circle.svg";

function DescriptionStep({ setSelectedDesc, onNext }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const maxLength = 150;

  function handleContinue() {
    if (!text.trim()) {
      setError("Please write a few words about your day before continuing.");
      return;
    }

    setSelectedDesc(text);
    setError("");
    onNext();
  }

  return (
    <div>
      <h3 className="text-preset-3 text-dark-text mb-8">
        What about your day...
      </h3>

      <textarea
        rows={4}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setError("");
        }}
        maxLength={maxLength}
        placeholder="Today, I felt..."
        className="p-3.5 bg-trends-background w-full border-[1.5px] border-[var(--color-neutral-300)] 
        rounded-xl text-[18px] text-dark-text placeholder-preset-6-italic focus-style"
      />

      <p className="text-preset-8 text-right text-light-grey-text mt-0.5 mb-8">
        {text.length}/{maxLength}
      </p>

      {error && (
        <p className="mb-3 text-preset-7 text-[var(--color-red-700)] flex gap-1.5">
          <img src={infoCircleIcon} alt="error" />
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleContinue}
        className=" text-preset-4 w-full h-16.5 bg-bright-blue-btn rounded-xl text-white-text focus-style cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
}

export default DescriptionStep;

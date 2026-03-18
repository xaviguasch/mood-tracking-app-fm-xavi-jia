import { useState } from "react";

import veryHappyIcon from "../assets/images/icon-very-happy-white.svg";
import happyIcon from "../assets/images/icon-happy-white.svg";
import neutralIcon from "../assets/images/icon-neutral-white.svg";
import sadIcon from "../assets/images/icon-sad-white.svg";
import verySadIcon from "../assets/images/icon-very-sad-white.svg";

const MOODS = [
  {
    name: "Very Happy",
    icon: veryHappyIcon,
    color: "bg-light-amber",
  },
  {
    name: "Happy",
    icon: happyIcon,
    color: "bg-light-green",
  },
  {
    name: "Neutral",
    icon: neutralIcon,
    color: "bg-light-blue",
  },
  {
    name: "Sad",
    icon: sadIcon,
    color: "bg-light-indigo",
  },
  {
    name: "Very Sad",
    icon: verySadIcon,
    color: "bg-light-red",
  },
];

const TOTAL_STEPS = 4;

function Modal({ onIsModalOpen }) {
  const [step, setStep] = useState(1);
  const [currentMood, setCurrentMood] = useState(MOODS[0].title);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nextStep = step + 1;

    if (nextStep === TOTAL_STEPS + 1) {
      return;
    }

    setStep(nextStep);
  };

  return (
    <div className="bg-[linear-gradient(180deg,#F5F5FF_72.99%,#E0E0FF_100%)] relative w-full rounded-2xl px-5 py-8 flex flex-col gap-6">
      <button
        onClick={onIsModalOpen}
        className="absolute top-2 right-2 text-xl"
      >
        ✕
      </button>
      <h2 className="text-preset-2-mobile md:text-preset-2">Log your mood</h2>

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        <header className="">
          <div className="flex items-center gap-4">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <span
                key={i}
                className={`h-1.5 w-full ${
                  step === i + 1 ? "bg-dark-blue" : "bg-super-light-blue"
                } rounded-full`}
              ></span>
            ))}
          </div>
        </header>

        <h2 className="text-preset-3-mobile">How was your mood today?</h2>

        {step === 1 && (
          <section>
            <ul className="flex flex-col justify-start items-stretch gap-3">
              {MOODS.map((mood) => {
                return (
                  <li key={mood.name}>
                    <label
                      htmlFor={mood.name}
                      className={`flex items-center justify-between px-5 py-3 rounded-xl cursor-pointer  border-2 bg-white-bg
                        ${
                          mood.name === currentMood
                            ? "border-dark-blue"
                            : "border-very-light-blue"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="mood"
                          value={mood.name}
                          id={mood.name}
                          checked={mood.name === currentMood}
                          onChange={(e) => setCurrentMood(e.target.value)}
                          className="cursor-pointer"
                        />

                        <span>{mood.name}</span>
                      </div>

                      <img src={mood.icon} alt="" className={mood.color} />
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {step === 2 && <section></section>}
        {step === 3 && <section></section>}

        <section className="">
          <button className="bg-dark-blue text-white-text rounded-[10px] py-4 text-preset-4 w-full">
            Continue
          </button>
        </section>
      </form>
    </div>
  );
}

export default Modal;

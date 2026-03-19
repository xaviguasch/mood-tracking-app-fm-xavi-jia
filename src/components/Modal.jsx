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

const HOURS_OF_SLEEP = [
  "9+ hours",
  "7-8 hours",
  "5-6 hours",
  "3-4 hours",
  "0-2 hours",
];

const INITIAL_FEELINGS = {
  Joyful: false,
  Down: false,
  Anxious: false,
  Calm: false,
  Excited: false,
  Frustrated: false,
  Lonely: false,
  Grateful: false,
  Overwhelmed: false,
  Motived: false,
  Irritable: false,
  Peaceful: false,
  Tired: false,
  Hopeful: false,
  Confident: false,
  Stressed: false,
  Content: false,
  Disappointed: false,
  Optimistic: false,
  Restless: false,
};

const TOTAL_STEPS = 4;

function Modal({ onIsModalOpen }) {
  const [step, setStep] = useState(1);
  const [currentMood, setCurrentMood] = useState(MOODS[0].title);
  const [feelings, setFeelings] = useState(INITIAL_FEELINGS);
  const [text, setText] = useState("");
  const [selectedHours, setSelectedHours] = useState(HOURS_OF_SLEEP[0]);

  const feelingsList = Object.keys(INITIAL_FEELINGS);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nextStep = step + 1;

    if (nextStep === TOTAL_STEPS + 1) {
      // PENDING on addding the logic for sending all the state data to the backend or somewhere else
      onIsModalOpen();
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

        {step === 1 && (
          <section className="flex flex-col justify-start gap-10">
            <h2 className="text-preset-3-mobile">How was your mood today?</h2>
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

        {step === 2 && (
          <section className="flex flex-col justify-start gap-6">
            <div>
              <h2 className="text-preset-3-mobile">How did you feel?</h2>
              <p>Select up to three tags:</p>
            </div>
            <ul className="flex flex-wrap justify-start items-stretch content-start gap-x-4 gap-y-3">
              {feelingsList.map((option) => (
                <div
                  key={option}
                  className={`px-4 py-3 text-preset-6-regular flex item gap-2 bg-white-bg rounded-[10px] border-2    ${
                    feelings[option] === true
                      ? "border-dark-blue"
                      : "border-very-light-blue"
                  }`}
                >
                  <input
                    type="checkbox"
                    id={option}
                    value={option}
                    checked={feelings[option] === true}
                    onChange={(event) => {
                      setFeelings({
                        ...feelings,
                        [option]: event.target.checked,
                      });
                    }}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </ul>
          </section>
        )}

        {step === 3 && (
          <section className="flex flex-col justify-start gap-6">
            <div>
              <h2 className="text-preset-3-mobile">Write about your day...</h2>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
              <textarea
                id="comment-field"
                className="border border-light-grey w-full rounded-[10px] min-h-37.5 px-4 py-3 text-preset-6-italic text-light-grey-text"
                placeholder="Today, I felt..."
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              />
              <span className="text-right w-full text-preset-8 text-light-grey-text">
                {text.length} / 150
              </span>
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="flex flex-col justify-start gap-6">
            <div>
              <h2 className="text-preset-3-mobile">
                How many hours did you sleep last night?
              </h2>
            </div>

            <ul className="flex flex-col justify-start items-stretch gap-3">
              {HOURS_OF_SLEEP.map((hours) => {
                return (
                  <li key={hours}>
                    <label
                      htmlFor={hours}
                      className={`flex items-center justify-between px-5 py-3 rounded-xl cursor-pointer  border-2 bg-white-bg
                        ${
                          hours === selectedHours
                            ? "border-dark-blue"
                            : "border-very-light-blue"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="hours"
                          value={hours}
                          id={hours}
                          checked={hours === selectedHours}
                          onChange={(e) => setSelectedHours(e.target.value)}
                          className="cursor-pointer"
                        />

                        <span>{hours}</span>
                      </div>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <section className="">
          <button className="bg-dark-blue text-white-text rounded-[10px] py-4 text-preset-4 w-full cursor-pointer">
            {step === TOTAL_STEPS ? "Submit" : "Continue"}
          </button>
        </section>
      </form>
    </div>
  );
}

export default Modal;

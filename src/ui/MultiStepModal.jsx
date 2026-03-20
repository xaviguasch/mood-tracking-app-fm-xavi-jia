import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import MoodStep from "./MoodStep";
import FeelingStep from "./FeelingStep";
import DescriptionStep from "./DescriptionStep";
import SleepHoursStep from "./SleepHoursStep";
import closeIcon from "../assets/images/icon-close.svg";

function MultiStepModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    mood: null,
    feelings: [],
    description: "",
    sleepHours: null,
  });

  const [resetKey, setResetKey] = useState(0);

  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const totalSteps = 4;

  const modalRoot = document.getElementById("modal");

  function handleClose() {
    onClose();
    setStep(0);
    setFormData({
      mood: null,
      feelings: [],
      description: "",
      sleepHours: null,
    });

    setResetKey((prev) => prev + 1);
  }

  function handleNext() {
    setStep((prev) => prev + 1);
  }

  function handleSubmit(extraData = {}) {
    const finalData = {
      ...formData,
      ...extraData,
    };

    const existingData = JSON.parse(localStorage.getItem("logData")) || [];
    console.log("Submitting", finalData);

    const newEntry = {
      ...finalData,
      id: Date.now(),
    };

    localStorage.setItem(
      "logData",
      JSON.stringify([...existingData, newEntry])
    );

    handleClose();
  }

  const stepBarClasses = (active) =>
    `h-1.5 w-29.5 rounded-2xl ${
      active ? "bg-bright-blue-btn" : "bg-[var(--color-blue-200)]"
    }`;

  const modalContent = (
    <dialog
      ref={dialogRef}
      className="fixed w-full mx-5 mt-17.5 p-10 rounded-2xl bg-[linear-gradient(180deg,#F5F5FF_73%,#E0E0FF_100%)]"
    >
      <button onClick={handleClose} className="absolute right-6 top-6">
        <img src={closeIcon} />
      </button>

      <form>
        <h2 className="text-preset-2 text-dark-text mb-8">Log your mood</h2>

        <div className="w-full flex justify-between mb-8 ">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span key={index} className={stepBarClasses(index === step)} />
          ))}
        </div>

        {step === 0 && (
          <MoodStep
            key={resetKey}
            selectedMood={formData.mood}
            setSelectedMood={(mood) =>
              setFormData((prev) => ({ ...prev, mood }))
            }
            onNext={handleNext}
          />
        )}

        {step === 1 && (
          <FeelingStep
            selectedFeelings={formData.feelings}
            setSelectedFeelings={(feelings) =>
              setFormData((prev) => ({ ...prev, feelings }))
            }
            onNext={handleNext}
          />
        )}

        {step === 2 && (
          <DescriptionStep
            selectedDesc={formData.description}
            setSelectedDesc={(desc) =>
              setFormData((prev) => ({ ...prev, description: desc }))
            }
            onNext={handleNext}
          />
        )}
        {step === 3 && (
          <SleepHoursStep
            selectedHours={formData.sleepHours}
            setSelectedHours={(hours) =>
              setFormData((prev) => ({ ...prev, sleepHours: hours }))
            }
            onSubmitStep={handleSubmit}
          />
        )}
      </form>
    </dialog>
  );

  return createPortal(modalContent, modalRoot);
}

export default MultiStepModal;

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import MoodStep from "./MoodStep";
import FeelingStep from "./FeelingStep";
import DescriptionStep from "./DescriptionStep";
import SleepHoursStep from "./SleepHoursStep";
import closeIcon from "../assets/images/icon-close.svg";

function MultiStepModal({ isOpen, onClose, onAddEntry }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    mood: null,
    feelings: [],
    description: "",
    sleepHours: null,
  });
  const [resetKey, setResetKey] = useState(0);

  console.log(formData);

  const dialogRef = useRef();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return; // safety

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
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
    const moodApp = JSON.parse(localStorage.getItem("moodApp")) || {};
    const currentUserId = moodApp.currentUserId;

    // id for entries is needed for the future
    const newEntry = {
      userId: currentUserId,
      createdAt: new Date().toISOString(),
      mood: formData.mood,
      feelings: [...formData.feelings],
      journalEntry: formData.description,
      sleepHours: extraData.sleepHours,
    };

    const updatedEntries = [...(moodApp.moodEntries || []), newEntry];

    localStorage.setItem(
      "moodApp",
      JSON.stringify({
        ...moodApp,
        moodEntries: updatedEntries,
      })
    );

    onAddEntry(newEntry);

    handleClose();

    // const finalData = {
    //   ...formData,
    //   ...extraData,
    // };

    // const existingData = JSON.parse(localStorage.getItem("logData")) || [];
    // console.log("Submitting", finalData);

    // const newEntry = {
    //   ...finalData,
    //   id: Date.now(),
    // };

    // localStorage.setItem(
    //   "logData",
    //   JSON.stringify([...existingData, newEntry]),
    // );

    // handleClose();
  }

  // console.log(JSON.parse(localStorage.getItem("moodApp")));

  const stepBarClasses = (index) =>
    `h-1.5 flex-1 min-w-[60px] rounded-2xl ${
      index <= step ? "bg-bright-blue-btn" : "bg-[var(--color-blue-200)]"
    }`;

  const modalContent = (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 m-0 p-0 w-screen h-screen max-w-none max-h-none flex justify-center items-start px-5 md:px-[21px] bg-black/40"
      onClick={(e) => {
        // close modal if user clicks outside the inner content
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-[600px] mx-5 md:mx-0 mt-20 px-5 md:px-10 py-10 md:py-12 rounded-2xl bg-[linear-gradient(180deg,#F5F5FF_73%,#E0E0FF_100%)] shadow-lg">
        {" "}
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 bg-transparent focus-style"
          aria-label="Close modal"
        >
          <img src={closeIcon} alt="Close" />
        </button>
        <form className="flex flex-col gap-8">
          <h2 className="text-preset-a text-dark-text">Log your mood</h2>

          <div className="w-full flex flex-wrap gap-4">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <span key={index} className={stepBarClasses(index)} />
            ))}
          </div>

          {step === 0 && (
            <MoodStep
              key={resetKey}
              setSelectedMood={(mood) =>
                setFormData((prev) => ({ ...prev, mood }))
              }
              onNext={handleNext}
            />
          )}

          {step === 1 && (
            <FeelingStep
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
              setSelectedHours={(hours) =>
                setFormData((prev) => ({ ...prev, sleepHours: hours }))
              }
              onSubmitStep={handleSubmit}
            />
          )}
        </form>
      </div>
    </dialog>
  );

  return createPortal(modalContent, modalRoot);
}

export default MultiStepModal;

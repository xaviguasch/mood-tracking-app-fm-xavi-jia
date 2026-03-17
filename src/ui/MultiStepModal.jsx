import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import MoodStep from "./MoodStep";

const MultiStepModal = forwardRef(function MultiStepModal({}, ref) {
  const dialogRef = useRef();

  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    mood: null,
    feelings: [],
    description: "",
    sleepHours: null,
  });
  console.log(formData);

  const totalSteps = 4;
  const currentStep = 0;

  const modalRoot = document.getElementById("modal");

  useImperativeHandle(ref, () => {
    return {
      open: () => dialogRef.current.showModal(),
      close: () => dialogRef.current.close(),
    };
  });

  function handleMoodChange(mood) {
    setFormData((prev) => ({ ...prev, mood }));
  }

  function handleNext() {
    if (step === 0 && !formData.mood) return;
    setStep((prev) => prev + 1);
  }

  function handleClose() {
    dialogRef.current.close();
    setStep(0);
  }

  const stepBarClasses = (active) =>
    `h-1.5 w-29.5 rounded-2xl ${active ? "bg-bright-blue-btn" : "bg-[var(--color-blue-200)]"}`;

  const modalContent = (
    <dialog
      ref={dialogRef}
      className="fixed w-150 m-auto py-12 px-10 rounded-2xl bg-[linear-gradient(180deg,#F5F5FF_73%,#E0E0FF_100%)]"
    >
      <button onClick={handleClose} className="absolute right-6 top-6">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--color-neutral-300)]"
        >
          <path
            d="M18 6L6 18"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <h2 className="text-preset-2 mb-8">Log your mood</h2>

      <div className="w-full flex justify-between mb-8 ">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <span key={index} className={stepBarClasses(index === currentStep)} />
        ))}
      </div>

      {step === 0 && (
        <MoodStep
          value={formData.mood}
          onChange={handleMoodChange}
          onNext={handleNext}
        />
      )}
    </dialog>
  );

  return createPortal(modalContent, modalRoot);
});

export default MultiStepModal;

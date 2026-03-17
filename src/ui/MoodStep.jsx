import veryHappyIcon from "../assets/images/icon-very-happy-color.svg";
import happyIcon from "../assets/images/icon-happy-color.svg";
import neutralIcon from "../assets/images/icon-neutral-color.svg";
import sadIcon from "../assets/images/icon-sad-color.svg";
import verySadIcon from "../assets/images/icon-very-sad-color.svg";

function MoodStep({ value, onChange, onNext }) {
  const moods = [
    { type: "Very Happy", icon: veryHappyIcon },
    { type: "Happy", icon: happyIcon },
    { type: "Neutral", icon: neutralIcon },
    { type: "Sad", icon: sadIcon },
    { type: "Very Sad", icon: verySadIcon },
  ];

  return (
    <div className="text-dark-text">
      <h3 className="text-preset-3 mb-8">How was your mood today?</h3>

      <div className="flex flex-col gap-2.5">
        {moods.map((mood) => (
          <label
            key={mood.type}
            className={`flex items-center justify-between w-full h-15.5 px-6 bg-white-text rounded-xl cursor-pointer border-2 
              ${value === mood.type ? "border-[var(--color-blue-600)]" : "border-translucid-line"}`}
          >
            <div className="flex items-center gap-2.5">
              <input
                type="radio"
                name="mood"
                value={mood.type}
                checked={value === mood.type}
                onChange={() => onChange(mood.type)}
              />

              {/* Mood label */}
              <span className="text-preset-5">{mood.type}</span>
            </div>

            <img src={mood.icon} alt={mood.type} className="w-9.5 h-9.5" />
          </label>

          // </button>
        ))}
      </div>

      <button
        disabled={!value}
        onClick={onNext}
        className=" text-preset-4 w-full h-16.5 bg-bright-blue-btn rounded-xl mt-8 text-white-text"
      >
        Continue
      </button>
    </div>
  );
}

export default MoodStep;

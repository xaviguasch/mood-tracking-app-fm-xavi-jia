import veryHappyIcon from "../assets/images/icon-very-happy-color.svg";
import happyIcon from "../assets/images/icon-happy-color.svg";
import neutralIcon from "../assets/images/icon-neutral-color.svg";
import sadIcon from "../assets/images/icon-sad-color.svg";
import verySadIcon from "../assets/images/icon-very-sad-color.svg";
import quoteIcon from "../assets/images/icon-quote.svg";

const moods = [
  { type: "Very Happy", value: 2, icon: veryHappyIcon },
  { type: "Happy", value: 1, icon: happyIcon },
  { type: "Neutral", value: 0, icon: neutralIcon },
  { type: "Sad", value: -1, icon: sadIcon },
  { type: "Very Sad", value: -2, icon: verySadIcon },
];

function MoodDailyPanel({ mood, moodQuotes }) {
  const moodData = moods.find((m) => m.value === mood);

  const moodQuotesArr = moodQuotes[moodData?.value] || [];

  const randomQuote =
    moodQuotesArr[Math.floor(Math.random() * moodQuotesArr.length)];

  return (
    <div className="flex flex-col justify-start items-center gap-8 bg-white rounded-2xl border border-translucid-line px-4 py-8 md:items-start relative overflow-hidden md:p-8 md:gap-25">
      <div className="flex flex-col justify-start items-center md:items-start">
        <span className="text-preset-mood text-dark-text/70">I'm feeling </span>
        <span className="text-preset-2 text-dark-text" s>
          {moodData?.type}
        </span>
      </div>

      <img
        className="w-50 md:absolute md:-bottom-9 md:right-8 md:w-78.75"
        src={moodData?.icon}
        alt=""
      />

      <div className="flex flex-col justify-start items-center gap-4 md:items-start md:max-w-62.5">
        <img className="w-6" src={quoteIcon} alt="" />
        <p className="text-preset-6-italic text-center md:text-left">
          "{randomQuote}"
        </p>
      </div>
    </div>
  );
}

export default MoodDailyPanel;

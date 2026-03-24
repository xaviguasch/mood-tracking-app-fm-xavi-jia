import veryHappyIcon from "../assets/images/icon-very-happy-color.svg";
import happyIcon from "../assets/images/icon-happy-color.svg";
import neutralIcon from "../assets/images/icon-neutral-color.svg";
import sadIcon from "../assets/images/icon-sad-color.svg";
import verySadIcon from "../assets/images/icon-very-sad-color.svg";
import infoCircleIcon from "../assets/images/icon-info-circle.svg";

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
    <div>
      <span>I'm feeling </span>

      <span>{moodData?.type}</span>
      <img src={moodData?.icon} alt="" />

      <p>{randomQuote}</p>
    </div>
  );
}

export default MoodDailyPanel;

import { calculateAverage } from "../../util/calculateAverage";

import bgPatternAverages from "../../assets/images/bg-pattern-averages.svg";
import veryHappyIcon from "../../assets/images/icon-very-happy-white.svg";
import happyIcon from "../../assets/images/icon-happy-white.svg";
import neutralIcon from "../../assets/images/icon-neutral-white.svg";
import sadIcon from "../../assets/images/icon-sad-white.svg";
import verySadIcon from "../../assets/images/icon-very-sad-white.svg";

import trendIncreaseIcon from "../../assets/images/icon-trend-increase.svg";
import trendDecreaseIcon from "../../assets/images/icon-trend-decrease.svg";
import trendSameIcon from "../../assets/images/icon-trend-same.svg";

function AverageMood({ last5Entries, previous5Entries }) {
  const lastAverage = calculateAverage(last5Entries, "mood");
  const previousAverage =
    previous5Entries.length === 5
      ? calculateAverage(previous5Entries, "mood")
      : null;

  const lastRounded = Math.round(lastAverage);
  const previousRounded =
    previousAverage !== null ? Math.round(previousAverage) : null;

  const moodLabels = {
    "-2": "Very Bad",
    "-1": "Bad",
    0: "Neutral",
    1: "Good",
    2: "Very Good",
  };
  const averageMood = moodLabels[lastRounded];

  const moodIcons = {
    "-2": verySadIcon,
    "-1": sadIcon,
    0: neutralIcon,
    1: happyIcon,
    2: veryHappyIcon,
  };
  const moodIcon = moodIcons[lastRounded];

  let trendIcon = trendSameIcon;
  let trendText = "Same as the previous 5 check-ins";

  if (previousRounded !== null) {
    if (lastRounded > previousRounded) {
      trendIcon = trendIncreaseIcon;
      trendText = "Increase from the previous 5 check-ins";
    } else if (lastRounded < previousRounded) {
      trendIcon = trendDecreaseIcon;
      trendText = "Decrease from the previous 5 check-ins";
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-preset-5 mb-3">
        Average Mood{" "}
        <span className="text-preset-7 text-light-grey-text">
          (Last 5 Check-ins)
        </span>
      </h2>

      <div
        className={`average-card ${
          last5Entries.length < 5 ? "bg-(--color-blue-100)" : "bg-blue-300"
        } `}
      >
        {last5Entries.length < 5 ? (
          <>
            <h3 className="text-preset-4 mb-3">Keep tracking!</h3>
            <p className="text-preset-7">
              Log 5 check-ins to see your average mood.
            </p>
          </>
        ) : (
          <>
            <h3 className="text-preset-4 mb-3 flex items-center gap-3">
              <img src={moodIcon} />
              {averageMood}
            </h3>
            <p className="text-preset-7 flex items-center gap-2">
              <img src={trendIcon} />
              {trendText}
            </p>
          </>
        )}
        <img src={bgPatternAverages} className="average-bg-pattern" />
      </div>
    </div>
  );
}

export default AverageMood;

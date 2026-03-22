import { calculateAverage } from "../../util/calculateAverage";

import bgPatternAverages from "../../assets/images/bg-pattern-averages.svg";
import sleepIcon from "../../assets/images/icon-sleep.svg";
import trendIncreaseIcon from "../../assets/images/icon-trend-increase.svg";
import trendDecreaseIcon from "../../assets/images/icon-trend-decrease.svg";
import trendSameIcon from "../../assets/images/icon-trend-same.svg";

function AverageSleep({ last5Entries, previous5Entries }) {
  const lastSleepAverage = calculateAverage(last5Entries, "sleepHours");

  const previousSleepAverage =
    previous5Entries.length === 5
      ? calculateAverage(previous5Entries, "sleepHours")
      : null;

  function sleepRange(hours) {
    if (hours < 5) return "<5 Hours";
    if (hours < 6) return "5-6 Hours";
    if (hours < 7) return "6-7 Hours";
    if (hours < 8) return "7-8 Hours";
    else return "8+ Hours";
  }

  const lastSleepRange = lastSleepAverage ? sleepRange(lastSleepAverage) : null;

  let sleepTrendIcon = trendSameIcon;
  let sleepTrendText = "Same as the previous 5 check-ins";

  if (previousSleepAverage !== null) {
    if (lastSleepAverage > previousSleepAverage) {
      sleepTrendIcon = trendIncreaseIcon;
      sleepTrendText = "Increase from the previous 5 check-ins";
    } else if (lastSleepAverage < previousSleepAverage) {
      sleepTrendIcon = trendDecreaseIcon;
      sleepTrendText = "Decrease from the previous 5 check-ins";
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-preset-5">
        Average Sleep{" "}
        <span className="text-preset-7 text-light-grey-text">
          (Last 5 Check-ins)
        </span>
      </h2>

      <div
        className={`average-card ${
          last5Entries.length < 5
            ? "bg-[var(--color-blue-100)] text-dark-text"
            : "bg-blue-600 text-white-text"
        } `}
      >
        {last5Entries.length < 5 ? (
          <>
            <h3 className="text-preset-4 mb-3">Not enough data yet!</h3>
            <p className="text-preset-7">
              Track 5 nights to view average sleep.
            </p>
          </>
        ) : (
          <>
            <h3 className="text-preset-4 mb-3 flex items-center gap-3">
              <img src={sleepIcon} />
              {lastSleepRange}
            </h3>
            <p className="text-preset-7 opacity-70 flex items-center gap-2">
              <img src={sleepTrendIcon} />
              {sleepTrendText}
            </p>
          </>
        )}
        <img src={bgPatternAverages} className="average-bg-pattern" />
      </div>
    </div>
  );
}

export default AverageSleep;

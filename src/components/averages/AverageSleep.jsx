import bgPatternAverages from "../../assets/images/bg-pattern-averages.svg";
import sleepIcon from "../../assets/images/icon-sleep.svg";
import trendIncreaseIcon from "../../assets/images/icon-trend-increase.svg";

function AverageSleep() {
  return (
    <div>
      <h2 className="text-preset-5 mb-3">
        Average Sleep{" "}
        <span className="text-preset-7 text-light-grey-text">
          (Last 5 Check-ins)
        </span>
      </h2>

      <div className="average-card bg-blue-600 text-white-text">
        <h3 className="text-preset-4 mb-3 flex items-center gap-3">
          <img src={sleepIcon} />
          5-6 Hours
        </h3>
        <p className="text-preset-7 opacity-70 flex items-center gap-2">
          <img src={trendIncreaseIcon} />
          Increase from the previous 5 check-ins
        </p>
        <img src={bgPatternAverages} className="average-bg-pattern" />
      </div>
    </div>
  );
}

export default AverageSleep;

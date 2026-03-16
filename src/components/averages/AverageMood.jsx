import bgPatternAverages from "../../assets/images/bg-pattern-averages.svg";
import neutralWhiteIcon from "../../assets/images/icon-neutral-white.svg";
import trendSameIcon from "../../assets/images/icon-trend-same.svg";

function AverageMood() {
  return (
    // <div className="mb-6">
    //   <h2 className="text-preset-5 mb-3">
    //     Average Mood{" "}
    //     <span className="text-preset-7 text-light-grey-text">
    //       (Last 5 Check-ins)
    //     </span>
    //   </h2>

    //   <div className="average-card bg-[var(--color-blue-100)]">
    //     <h3 className="text-preset-4 mb-3">Keep tracking!</h3>
    //     <p className="text-preset-7">
    //       Log 5 check-ins to see your average mood.
    //     </p>
    //     <img src={bgPatternAverages} className="average-bg-pattern" />
    //   </div>
    // </div>

    <div className="mb-6">
      <h2 className="text-preset-5 mb-3">
        Average Mood{" "}
        <span className="text-preset-7 text-light-grey-text">
          (Last 5 Check-ins)
        </span>
      </h2>

      <div className="average-card bg-blue-300">
        <h3 className="text-preset-4 mb-3 flex items-center gap-3">
          <img src={neutralWhiteIcon} />
          Neutral
        </h3>
        <p className="text-preset-7 flex items-center gap-2">
          <img src={trendSameIcon} />
          Same as the previous 5 check-ins
        </p>
        <img src={bgPatternAverages} className="average-bg-pattern" />
      </div>
    </div>
  );
}

export default AverageMood;

import bgPatternAverages from "../../assets/images/bg-pattern-averages.svg";

function AverageMood() {
  return (
    <div className="mb-[24px]">
      <h2 className="average-title">
        Average Mood <span>(Last 5 Check-ins)</span>
      </h2>

      <div className="average-card">
        <h3>Keep tracking!</h3>
        <p>Log 5 check-ins to see your average mood.</p>
        <img src={bgPatternAverages} className="average-bg-pattern" />
      </div>
    </div>
  );
}

export default AverageMood;

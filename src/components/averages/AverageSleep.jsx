import bgPatternAverages from "../../assets/images/bg-pattern-averages.svg";

function AverageSleep() {
  return (
    <div>
      <h2 className="average-title">
        Average Sleep <span>(Last 5 Check-ins)</span>
      </h2>

      <div className="average-card">
        <h3>Not enough data yet!</h3>
        <p>Track 5 nights to view average sleep.</p>{" "}
        <img src={bgPatternAverages} className="average-bg-pattern" />
      </div>
    </div>
  );
}

export default AverageSleep;

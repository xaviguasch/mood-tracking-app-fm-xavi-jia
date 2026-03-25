import sleepIcon from "../assets/images/sleep-icon-figma.svg";

function SleepDailyPanel({ sleepHours }) {
  return (
    <div className="flex flex-col justify-start items-start gap-4 bg-white rounded-2xl border border-translucid-line px-5 py-5 lg:h-full">
      <div className="flex justify-start items-center gap-3">
        {/* temporary background, SVG issues */}
        <img src={sleepIcon} alt="" />
        <p className="text-preset-6 text-light-grey-text">Sleep</p>
      </div>
      <p className="text-preset-hours">{sleepHours} hours</p>
    </div>
  );
}

export default SleepDailyPanel;

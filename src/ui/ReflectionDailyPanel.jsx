import reflectionIcon from "../assets/images/icon-reflection.svg";

function ReflectionDailyPanel({ journalEntry, feelings }) {
  return (
    <div className="flex flex-col justify-start items-start gap-4 bg-white rounded-2xl border border-translucid-line px-5 py-5 lg:h-full">
      <div className="flex justify-start items-center gap-3">
        <img src={reflectionIcon} alt="" />
        <p className="text-preset-6 text-light-grey-text">
          Relfection of the day
        </p>
      </div>
      <p className="text-dark-text text-preset-6">{journalEntry}</p>
      <div className="text-preset-6-italic text-light-grey-text gap-3 flex flex-wrap mt-6">
        {feelings.map((feeling) => (
          <span key={feeling}>#{feeling}</span>
        ))}
      </div>
    </div>
  );
}

export default ReflectionDailyPanel;

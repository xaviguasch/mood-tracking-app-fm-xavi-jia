import MoodDailyPanel from "./MoodDailyPanel";
import ReflectionDailyPanel from "./ReflectionDailyPanel";
import SleepDailyPanel from "./SleepDailyPanel";

function DailyPanel({ lastEntry, moodQuotes }) {
  const { mood, sleepHours, journalEntry, feelings } = lastEntry;

  console.log(lastEntry);

  return (
    <div className="w-full gap-5 flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-8">
      <div className="lg:col-span-2 lg:row-span-2 h-full">
        <MoodDailyPanel mood={mood} moodQuotes={moodQuotes} />
      </div>

      <div className="lg:col-span-1 lg:row-span-1 h-full">
        <SleepDailyPanel sleepHours={sleepHours} />
      </div>

      <div className="lg:col-span-1 lg:row-span-1 h-full">
        <ReflectionDailyPanel journalEntry={journalEntry} feelings={feelings} />
      </div>
    </div>
  );
}

export default DailyPanel;

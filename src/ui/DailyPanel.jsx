import MoodDailyPanel from "./MoodDailyPanel";
import ReflectionDailyPanel from "./ReflectionDailyPanel";
import SleepDailyPanel from "./SleepDailyPanel";

function DailyPanel({ lastEntry, moodQuotes }) {
  const { mood, sleepHours, journalEntry, feelings } = lastEntry;

  console.log(lastEntry);

  return (
    <div className="flex flex-col gap-5 justify-start items-stretch w-full">
      <MoodDailyPanel mood={mood} moodQuotes={moodQuotes} />
      <SleepDailyPanel sleepHours={sleepHours} />
      <ReflectionDailyPanel journalEntry={journalEntry} feelings={feelings} />
    </div>
  );
}

export default DailyPanel;

import MoodDailyPanel from "./MoodDailyPanel";
import ReflectionDailyPanel from "./ReflectionDailyPanel";
import SleepDailyPanel from "./SleepDailyPanel";

function DailyPanel({ lastEntry, moodQuotes }) {
  const { mood, sleepHours, journalEntry, feelings } = lastEntry;

  console.log(lastEntry);

  return (
    <div>
      Daily Panel
      <MoodDailyPanel mood={mood} moodQuotes={moodQuotes} />
      <SleepDailyPanel sleepHours={sleepHours} />
      <ReflectionDailyPanel journalEntry={journalEntry} feelings={feelings} />
    </div>
  );
}

export default DailyPanel;

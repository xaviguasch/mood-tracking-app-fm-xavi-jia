import { useRef } from "react";
import sleepIcon from "../assets/images/sleep-icon-figma.svg";
import SleepBar from "./SleepBar";

const LEVEL_HEIGHT = 56;

function Trends({ moodEntries }) {
  const sleepBarsRef = useRef();

  const rows = ["9+ hours", "7-8 hours", "5-6 hours", "3-4 hours", "0-2 hours"];

  const entries = [...moodEntries]
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .slice(-15);

  const dates = entries.map((entry) => {
    const d = new Date(entry.createdAt);
    return {
      month: d.toLocaleString("default", { month: "long" }),
      day: d.getDate(),
    };
  });

  return (
    <div className="bg-trends-background flex-1 min-w-0 rounded-2xl py-5 md:py-6 px-4 md:px-6 flex flex-col gap-8">
      <h2 className="text-preset-mood">Mood and sleep trends</h2>

      <div className="flex gap-4">
        {/* HOURS COLUMN */}
        <div className="flex flex-col w-17.5 shrink-0">
          {rows.map((row) => (
            <div
              key={row}
              style={{ height: `${LEVEL_HEIGHT}px` }}
              className="flex items-start gap-1.5 text-preset-9 text-light-grey-text"
            >
              <img src={sleepIcon} className="w-3 h-3" />
              {row}
            </div>
          ))}
        </div>

        {/* BARS + DATES */}
        <div
          className="overflow-x-auto overflow-y-hidden flex-1"
          ref={sleepBarsRef}
        >
          <div className="min-w-max flex flex-col gap-3">
            {/* BARS */}
            <div
              className="flex items-end gap-4"
              style={{ height: `${LEVEL_HEIGHT * 5 + 8}px` }}
            >
              {entries.map((entry, i) => (
                <div key={i} className="flex justify-center w-10">
                  <SleepBar entry={entry} containerRef={sleepBarsRef} />
                </div>
              ))}
            </div>

            {/* DATES */}
            <div className="flex gap-4">
              {dates.map((date, i) => (
                <div key={i} className="flex flex-col items-center gap-1 w-10">
                  <p className="text-preset-9 text-light-grey-text">
                    {date.month}
                  </p>
                  <p className="text-preset-8 text-dark-text">{date.day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trends;

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

// import sleepIcon from "../assets/images/icon-sleep.svg";

// function Trends() {
//   const rows = ["9+ hours", "7-8 hours", "5-6 hours", "3-4 hours", "0-2 hours"];

//   const dates = [
//     { month: "April", day: "01" },
//     { month: "April", day: "02" },
//     { month: "April", day: "03" },
//     { month: "April", day: "04" },
//     { month: "April", day: "05" },
//     { month: "April", day: "06" },
//     { month: "April", day: "07" },
//     { month: "April", day: "08" },
//     { month: "April", day: "09" },
//     { month: "April", day: "10" },
//     { month: "April", day: "11" },
//     { month: "April", day: "12" },
//     { month: "April", day: "13" },
//     { month: "April", day: "14" },
//     { month: "April", day: "15" },
//     { month: "April", day: "16" },
//     { month: "April", day: "17" },
//     { month: "April", day: "18" },
//     { month: "April", day: "19" },
//     { month: "April", day: "20" },
//     { month: "April", day: "21" },
//     { month: "April", day: "22" },
//     { month: "April", day: "23" },
//     { month: "April", day: "24" },
//     { month: "April", day: "25" },
//     { month: "April", day: "26" },
//     { month: "April", day: "27" },
//     { month: "April", day: "28" },
//     { month: "April", day: "29" },
//     { month: "April", day: "30" },
//   ];

//   return (
//     <div className="bg-trends-background w-full rounded-2xl py-5 pl-4 flex flex-col gap-5">
//       <h2 className="text-preset-3-mobile md:text-preset-3">
//         Mood and sleep trends
//       </h2>

//       <div className="">
//         <div className="overflow-x-auto">
//           <div className="grid grid-cols-[max-content_repeat(30,80px)] gap-y-10 items-center">
//             {rows.map((row, i) => (
//               <>
//                 <div
//                   key={row}
//                   className="flex items-center gap-1.5 text-preset-9 text-light-grey-text pr-4"
//                 >
//                   <span>
//                     <img className="w-[8.75px] h-2.5" src={sleepIcon}></img>
//                   </span>
//                   {row}
//                 </div>

//                 {dates.map((_, j) => (
//                   <div
//                     key={`${i}-${j}`}
//                     className="h-px bg-translucid-line w-full"
//                   />
//                 ))}
//               </>
//             ))}

//             <div></div>

//             {dates.map((date, i) => (
//               <div key={i} className="flex flex-col gap-1.5 items-center pt-4">
//                 <p className="text-preset-9 text-light-grey-text">
//                   {date.month}
//                 </p>
//                 <p className="text-preset-8  text-dark-text">{date.day}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Trends;

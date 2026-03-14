import sleepIcon from "../assets/images/icon-sleep.svg";

function Trends() {
  const rows = ["9+ hours", "7-8 hours", "5-6 hours", "3-4 hours", "0-2 hours"];

  const dates = [
    { month: "April", day: "01" },
    { month: "April", day: "02" },
    { month: "April", day: "03" },
    { month: "April", day: "04" },
    { month: "April", day: "05" },
    { month: "April", day: "06" },
    { month: "April", day: "07" },
    { month: "April", day: "08" },
    { month: "April", day: "09" },
    { month: "April", day: "10" },
    { month: "April", day: "11" },
    { month: "April", day: "12" },
    { month: "April", day: "13" },
    { month: "April", day: "14" },
    { month: "April", day: "15" },
    { month: "April", day: "16" },
    { month: "April", day: "17" },
    { month: "April", day: "18" },
    { month: "April", day: "19" },
    { month: "April", day: "20" },
    { month: "April", day: "21" },
    { month: "April", day: "22" },
    { month: "April", day: "23" },
    { month: "April", day: "24" },
    { month: "April", day: "25" },
    { month: "April", day: "26" },
    { month: "April", day: "27" },
    { month: "April", day: "28" },
    { month: "April", day: "29" },
    { month: "April", day: "30" },
  ];

  return (
    <div className="bg-trends-background w-full rounded-2xl py-5 pl-4 flex flex-col gap-5">
      <h2 className="text-preset-3-mobile md:text-preset-3">
        Mood and sleep trends
      </h2>

      <div className="">
        <div className="overflow-x-auto">
          {/* GRID */}
          <div className="grid grid-cols-[max-content_repeat(30,80px)] gap-y-6 items-center">
            {rows.map((row, i) => (
              <>
                {/* Label */}
                <div
                  key={row}
                  className="flex items-center gap-1.5 text-preset-9 text-light-grey-text pr-3"
                >
                  <span>
                    <img className="w-[8.75px] h-2.5" src={sleepIcon}></img>
                  </span>
                  {row}
                </div>

                {/* Grid lines */}
                {dates.map((_, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="h-px bg-translucid-line w-full"
                  />
                ))}
              </>
            ))}

            {/* Dates row */}
            <div></div>

            {dates.map((date, i) => (
              <div key={i} className="flex flex-col gap-1.5 items-center">
                <p className="text-preset-9 text-light-grey-text">
                  {date.month}
                </p>
                <p className="text-preset-8  text-dark-text">{date.day}</p>
              </div>
            ))}
            {/* Spacer at the bottom */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trends;

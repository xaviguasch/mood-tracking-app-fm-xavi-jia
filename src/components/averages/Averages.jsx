import AverageMood from "./AverageMood";
import AverageSleep from "./AverageSleep";

function Averages({ moodEntries }) {
  const sortedEntries = [...moodEntries].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  );

  const last5Entries = sortedEntries.slice(-5);
  const previous5Entries = sortedEntries.slice(-10, -5);

  return (
    <section className=" text-dark-text px-4 py-5 bg-trends-background rounded-xl flex flex-col gap-8 xl:min-w-[370px]">
      <AverageMood
        last5Entries={last5Entries}
        previous5Entries={previous5Entries}
      />
      <AverageSleep
        last5Entries={last5Entries}
        previous5Entries={previous5Entries}
      />
    </section>
  );
}

export default Averages;

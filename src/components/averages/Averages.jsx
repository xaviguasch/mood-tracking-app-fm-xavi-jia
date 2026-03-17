import AverageMood from "./AverageMood";
import AverageSleep from "./AverageSleep";
import data from "../../../data.json";

function Averages() {
  const sortedEntries = [...data.moodEntries].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  );

  const last5Entries = sortedEntries.slice(-5);
  const previous5Entries = sortedEntries.slice(-10, -5);

  return (
    <section className="h-full text-dark-text py-5 sm:py-6 px-4 sm:px-5 bg-trends-background rounded-2xl flex flex-col justify-between">
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

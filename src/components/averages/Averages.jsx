import AverageMood from "./AverageMood";
import AverageSleep from "./AverageSleep";

function Averages() {
  return (
    <section className="text-dark-text py-5 sm:py-6 px-4 sm:px-5 mt-16 bg-trends-background rounded-xl ">
      <AverageMood />
      <AverageSleep />
    </section>
  );
}

export default Averages;

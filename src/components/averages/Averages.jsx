import AverageMood from "./AverageMood";
import AverageSleep from "./AverageSleep";

function Averages() {
  return (
    <section className="py-[20px] sm:py-[24px] px-[16px] sm:px-[20px] mt-[64px] bg-white rounded-xl ">
      <AverageMood />
      <AverageSleep />
    </section>
  );
}

export default Averages;

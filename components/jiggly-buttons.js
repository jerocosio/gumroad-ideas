import FunkyButton from "./funky-button";

export default function JigglyButtons() {
  return (
    <section>
      <h2 className="text-2xl">Small improvements</h2>
      <div>
        <h3>
          Improve the jittering of some main buttons when hovering over them:
        </h3>
        <p>
          <strong>Current:</strong>
        </p>
        <p>
          <strong>Proposed change:</strong>
        </p>
        <div className="my-6">
          <FunkyButton
            customClass={
              "bg-transparent text-white border border-white group-hover:bg-transparent group-hover:shadow-[4px_4px_0_0_rgb(255,255,255)]"
            }
          >
            Login
          </FunkyButton>
          <FunkyButton>Start selling</FunkyButton>
        </div>
      </div>
    </section>
  );
}

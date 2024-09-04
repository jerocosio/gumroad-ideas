import FunkyButton from "./funky-button";

export default function JigglyButtons() {
  return (
    <section>
      <h2 id="jiggly">Jiggly buttons</h2>
      <div>
        <p>
          Improve the jittering of some of the buttons found throughout Gumroad
        </p>
        <p>
          <strong>Problem:</strong>
        </p>
        <ul>
          <li>
            <img src="/jitter.gif" />
          </li>
        </ul>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>
            Make the transitions smoother by simply making the actual
            button/link bigger than the moving squares and adding padding over
            it.
          </li>
        </ul>
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

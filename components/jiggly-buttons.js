import FunkyButton from "./funky-button";

export default function JigglyButtons() {
  return (
    <section>
      <h2 id="jiggly">Jiggly buttons</h2>
      <div>
        <p>
          Improve the jittering of some of the buttons found throughout Gumroad
          when hovering over the borders.
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
            Make the transitions smoother by making the actual button/link
            bigger by adding some padding, and creating new rectangles/buttons
            that actually animate.
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

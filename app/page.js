import JigglyButtons from "@/components/jiggly-buttons";
import LandingNavigation from "@/components/landing-navigation";
import LastLogin from "@/components/last-login";
import TipJar from "@/components/tip-jar";

export default function Home() {
  return (
    <main className=" container mx-auto max-w-3xl">
      <article className="prose prose-invert">
        <section>
          <h2>CONTENTS</h2>
          <ul>
            <li>
              <a href="#about_me">About me</a>
            </li>
            <li>
              <a href="#why_gumroad">Why Gumroad?</a>
            </li>
            <li>
              <a href="#jiggly">Jiggly buttons</a>
            </li>
            <li>
              <a href="#nav">Landing navigation</a>
            </li>
            <li>Last login</li>
            <li>Tip Jar</li>
            <li>Revamped signup</li>
          </ul>
        </section>
        <section id="why_gumroad">
          <h2>Why Gumroad?</h2>
          <div>
            <p>
              I discovered Gumroad for the first time a couple of years ago,
              when I bought a technical interview process course, since then
              I've been really impressed with the product, the business model,
              the management style, and of course the openess of the whole
              company. That's why when I saw the campaign on Republic I even
              made a small investment ($400), but I've seen it evolve over the
              years and the speed that things seem to move there really is
              something I can get behind. Also, I've always said that the best
              technology products are the ones that help other people make money
              online, which is basically what Gumroad does.
            </p>
          </div>
        </section>
        <section id="about_me">
          <h2>About me</h2>
          <div>
            <p>
              I'm Jero from Mexico City, an engineer that loves to code and has
              been working in tech for the past 10 years, in both big and small
              companies. I'm currently working as a partner manager at Apple in
              the Worldwide Developer relations team helping devs create the
              best version of their apps with a focus on technology and design.
              I also have experience in development, product management,
              operations, and I've been an entrepreneur myself. If you want to
              check out my whole CV, visit my public{" "}
              <a href="https://www.micv.co/cv/jeronimo-cosio-dukkr">cv here</a>,
              published on https://micv.co, my most recent product launched.
            </p>
            <p>
              But enough about me, here I want to show some improvements I
              though of in the past couple of days while browsing Gumroad that
              I'm sure would improve the CX for the creators as well as improve
              their GMV.
            </p>
          </div>
        </section>
        <JigglyButtons />
        <LandingNavigation />
        <LastLogin />
        <TipJar />
      </article>
    </main>
  );
}

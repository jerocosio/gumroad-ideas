import JigglyButtons from "@/components/jiggly-buttons";
import LandingNavigation from "@/components/landing-navigation";
import LastLogin from "@/components/last-login";
import TipJar from "@/components/tip-jar";

import FunkyButton from "@/components/funky-button";

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
            <li>
              <a href="#last_login">Last login</a>
            </li>
            <li>
              <a href="#tip_jar">Tipping Jar</a>
            </li>
            <li>
              <a href="#revamped_signup">Revamped signup</a>
            </li>
          </ul>
        </section>
        <hr className=" border-pink-400" />
        <section id="why_gumroad">
          <h2>Why Gumroad?</h2>
          <div>
            <p>
              I discovered Gumroad for the first time a couple of years ago,
              when I bought a technical interview process course, since then
              I've been really impressed with the product, the business model,
              the management style, and of course the openess of the whole
              company. That's why when I saw the campaign on Republic I even
              made a small investment ($400). I've always said that the best
              technology products are the ones that help other people make money
              online, which is basically what Gumroad does, and if you add the
              speed at which things are moving in the creator economy and the
              company, I'm sure that Gumroad is in a great position to take
              advantage of it.
            </p>
          </div>
        </section>
        <hr className=" border-pink-400" />
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
              published on https://micv.co, my most recent product launched
              (sorry only availabel in Spanish at the moment).
            </p>
            <p>
              But enough about me, I wanted to create this simple project to
              showcase my skills and show some improvements I though of in the
              past couple of days while browsing Gumroad that I'm sure would
              improve the CX for the creators as well as their GMV.
            </p>
          </div>
        </section>
        <hr className=" border-pink-400" />
        <JigglyButtons />
        <hr className=" border-pink-400" />
        <LandingNavigation />
        <hr className=" border-pink-400" />
        <LastLogin />
        <hr className=" border-pink-400" />
        <TipJar />
        <hr className=" border-pink-400" />
        <section>
          <h2 id="revamped_signup">Revamped signup</h2>
          <p>
            I believe this has to be one of the most important parts fo the
            funnel for new creators, as it's the last decision they have to make
            before actually signing up.
          </p>
          <p>
            <strong>Problem:</strong>
          </p>
          <ul>
            <li>
              <p>
                Not all the signup options show above the fold on a 13' screen
                or smaller and users have to scroll.
              </p>
            </li>
            <li>
              <p>
                It's better to use the 'default' wording that social login
                platforms use, as the users are more familiar with them.
              </p>
            </li>
            <li>
              <p>
                The coloring of the current buttons is not the best, as there
                are a lot of blues and could be confused by different states of
                the buttons.
              </p>
            </li>
            <li>
              <p>
                Half of the page is 'wasted' with a graphic. Instead of taking
                it as an opportunity to show how great Gumroad is.
              </p>
            </li>
          </ul>
          <p>
            <strong>Solution:</strong>
          </p>
          <ul>
            <li>
              Add a new section on the right side of the page with the most
              catchy content around the amazing benefits of using Gumroad.
            </li>
            <li>
              Take advantage of the amazing community of creators to add some
              social proof.
            </li>
            <li>
              Add the last login/signup option so it's easier for the user to
              know which one they used last time.
            </li>
            <li>
              Make sure that all the login/signup options are shown above the
              fold.
            </li>
            <li>
              Standraized the buttons to make it easier tot he users to
              understand them, and use the same wording as each social login
              platform.
            </li>
          </ul>
          <FunkyButton href="/signup">Visit revisited signup</FunkyButton>
        </section>
        <hr className=" border-pink-400" />
        <section>
          If you want to learn more about the code for this site you can visit
          the repository on{" "}
          <a href="https://github.com/jerocosio/gumroad-ideas">Github</a>, this
          page was mainly built with Next.js and the styling was done with
          TailwindCSS.
        </section>
      </article>
    </main>
  );
}

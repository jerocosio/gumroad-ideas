import JigglyButtons from "@/components/jiggly-buttons";
import LandingNavigation from "@/components/landing-navigation";
import LastLogin from "@/components/last-login";
import TipJar from "@/components/tip-jar";

export default function Home() {
  return (
    <main className=" container mx-auto max-w-3xl">
      <article class="prose prose-invert">
        <section>
          <h2>CONTENTS</h2>
          <ul>
            <li>About me</li>
            <li>Why Gumroad?</li>
            <li>Landing navigation</li>
            <li>Last login</li>
            <li>Tip Jar</li>
          </ul>
        </section>
        <JigglyButtons />
        <LandingNavigation />
        <LastLogin />
        <TipJar />
      </article>
    </main>
  );
}

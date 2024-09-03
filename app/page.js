import MediumImprovements from "@/components/medium-improvements";
import SmallImprovements from "@/components/small-improvements";

export default function Home() {
  return (
    <main className=" container mx-auto max-w-3xl">
      <article class="prose prose-invert">
        <section>
          <h2>CONTENTS</h2>
          <ul>
            <li>About me</li>
            <li>Small ideas</li>
            <li>Medium ideas</li>
            <li>Other ideas</li>
          </ul>
        </section>
        <SmallImprovements />
        <MediumImprovements />
      </article>
    </main>
  );
}

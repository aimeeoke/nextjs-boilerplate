export const metadata = {
  title: "About Aimee Oke | AI for Research Administration",
  description:
    "Aimee Oke helps research administrators build AI literacy and reduce administrative burden through practical, open-access tools and guidance.",
};

export default function AboutPage() {
  return (
    <article
      style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem", lineHeight: 1.7 }}
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <h1>About Aimee</h1>

      {/* ===== PART 1: THE MISSION ===== */}
      <section aria-labelledby="who-i-help">
        <h2 id="who-i-help">Who I Help</h2>
        <p>
          I work with research administrators and research development professionals 
          who know AI matters but aren't sure where to begin. If you've been meaning 
          to learn this stuff, but the landscape feels overwhelming and your to-do 
          list is already full, you're exactly who I built this site for.
        </p>

        <h2 id="why-this-matters">Why This Matters</h2>
        <p>
          Research administration is defined by deadlines, compliance, and the 
          constant pressure to do more with less. AI can help, but most of what's 
          out there is written for tech audiences, not for people managing training 
          grants, coordinating proposals, or keeping programs running.
        </p>
        <p>
          I believe the professionals closest to the work should be the ones shaping 
          how AI gets used in research operations. That means building your own 
          literacy, not waiting for someone else to hand you a policy.
        </p>

        <h2 id="how-i-help">How I Can Help</h2>
        <p>
          Everything on this site is open-access: custom GPTs, guides, templates, 
          and practical starting points you can use today. I also share what I've 
          learned through workshops, presentations, and collaborations with others 
          working in this space.
        </p>
        <p>
          I collaborated with{" "}
          <a href="https://atomgrants.com" target="_blank" rel="noopener noreferrer">
            Atom Grants
          </a>{" "}
          to create an <strong>AI Readiness Self-Assessment</strong> designed 
          specifically for research development professionals. You can find it in 
          the <a href="/resources">Resources</a> section.
        </p>
        <p>
          My goal is simple: help you find your footing so you can reduce 
          administrative burden and reclaim time for the work that actually 
          requires your expertise.
        </p>
      </section>

      <hr style={{ margin: "2.5rem 0", border: "none", borderTop: "1px solid #ddd" }} />

      {/* ===== PART 2: MY STORY ===== */}
      <section aria-labelledby="my-story">
        <h2 id="my-story">My Story</h2>
        <p>
          In December 2024, somewhere between tasting rooms in Napa Valley, my 
          husband and I started listening to AI podcasts. OpenAI had just kicked 
          off a rapid release streak, and we tuned in on day one. For the rest of 
          the trip, I found myself waiting for each announcement like a kid 
          counting down to something big.
        </p>
        <p>
          Back home, I read Ethan Mollick's <em>Co-Intelligence</em> in two days 
          and had what he calls the "three sleepless nights." I made a decision: 
          if I want to thrive in the world that's coming, I need to become 
          genuinely fluent in AI. Not just aware of it.
        </p>

        <h2 id="going-all-in">Going All-In</h2>
        <p>
          I didn't dabble. I committed. I now spend six to eight hours a week on 
          AI podcasts, including <em>Everyday AI</em>, <em>The Artificial 
          Intelligence Show</em>, and <em>Dwarkesh Patel</em>. I've been enrolled 
          in SmarterX's AI Mastery Academy for a full year. I watch Andrej 
          Karpathy's deep-dive videos on how language models actually work. I read 
          papers from the major labs whenever I find them.
        </p>
        <p>
          But I didn't stay in learning mode. I started building: custom GPTs, 
          data visualizations, forecasting tools, and internal knowledge systems. 
          I taught workshops, tested our campus AI platform before launch, and 
          helped teams prototype real use cases. I've presented at conferences and 
          university events, and I continue to look for ways to share what I've 
          learned.
        </p>

        <h2 id="my-background">My Background</h2>
        <p>
          I'm not a computer scientist. I'm a research administrator with 21 years 
          at Colorado State University, in the College of Veterinary 
          Medicine and Biomedical Sciences. I've contributed to 35+ NIH training 
          grant proposals, with 17 funded. I currently direct the Training Grant 
          Support Office and oversee programs supporting 60+ trainees each year.
        </p>
        <p>
          That background is exactly why I see AI differently than a tech 
          evangelist might. I know which tasks eat your time. I know which 
          shortcuts actually hold up under audit. I understand the skepticism, 
          because I work alongside people who have it.
        </p>

        <h2 id="why-i-built-this">Why I Built This Site</h2>
        <p>
          A year ago, I was figuring this out from scratch. There was no roadmap 
          and no one in my professional circle to ask. I built aimeeoke.ai to be 
          the resource I wished I'd had: open-access tools, honest guidance, and 
          practical starting points for research administrators who are ready to 
          get started.
        </p>
        <p>
          You don't need to go as deep as I did. But you do need someone who 
          has, and who can show you the shortcuts.
        </p>
      </section>

      <nav aria-label="Next steps" style={{ marginTop: "2.5rem" }}>
        <p>
          <a href="/resources">Explore the resources →</a>
          {" "} | {" "}
          <a href="/contact">Get in touch</a>
        </p>
      </nav>
    </article>
  );
}

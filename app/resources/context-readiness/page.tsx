export const metadata = {
  title: "The 4 Hurdles: Context Readiness | Aimee Oke",
  description:
    "Why most research offices struggle to get started with AI, and practical strategies for overcoming each barrier.",
};

export default function ContextReadinessPage() {
  return (
    <article
      style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem", lineHeight: 1.7 }}
    >
      <h1>The 4 Hurdles: Context Readiness</h1>
      
      <p>
        Before you can build effective AI workflows, you need to get your context 
        ready. Most research offices jump straight to tools and wonder why nothing 
        sticks. The real challenge is not the technology. It's that the foundation 
        isn't in place.
      </p>
      <p>
        Here are the four hurdles I see again and again, along with what you can 
        do about each one.
      </p>

      <section aria-labelledby="hurdle-1" style={{ marginTop: "2.5rem" }}>
        <h2 id="hurdle-1">1. Fragmented Data and System Silos</h2>
        <p>
          The data you need is not located in a single system. It's siloed across 
          platforms and not readily accessible across the university. Some of it 
          lives in people's heads, in email threads, or buried in personal folders. 
          Other data requires deep knowledge of university platforms, which change 
          over time. And often, the data you need most is locked behind permission 
          structures that make workflow development difficult.
        </p>
        <p>
          <strong>What to do:</strong> Start by mapping where your critical 
          information actually lives. You don't need to fix every silo. Just 
          document what exists and where, so you know what you're working with 
          when you design a workflow.
        </p>
      </section>

      <section aria-labelledby="hurdle-2" style={{ marginTop: "2.5rem" }}>
        <h2 id="hurdle-2">2. Absence of Formal AI Governance</h2>
        <p>
          Nearly all universities currently lack a clear AI usage policy, creating 
          a "wild west" environment. Institutions may not have purchased usable 
          model licenses. The tools that are available often come with arbitrary 
          limitations: chat-only access with no app integration, restrictive file 
          upload caps, or platforms running on older models without reasoning 
          capabilities or useful tools like code execution.
        </p>
        <p>
          The result? Anyone who wants to do meaningful work with AI is either 
          stuck with limited free versions or paying out of pocket for "shadow AI" 
          that IT doesn't know about.
        </p>
        <p>
          <strong>What to do:</strong> Don't wait for perfect policy. Learn what 
          you can use responsibly within current constraints. Focus on low-risk 
          use cases with public or non-sensitive data while governance catches up. 
          And document your practices so you're ready when formal policies arrive.
        </p>
      </section>

      <section aria-labelledby="hurdle-3" style={{ marginTop: "2.5rem" }}>
        <h2 id="hurdle-3">3. Undocumented Processes and Tribal Knowledge</h2>
        <p>
          Core processes live in employees' heads. The person who's been doing 
          something for fifteen years knows all the edge cases, exceptions, and 
          workarounds, but none of it is written down. This makes it nearly 
          impossible to transform institutional knowledge into workflows, SOPs, 
          wikis, or anything an AI system could learn from.
        </p>
        <p>
          <strong>What to do:</strong> Start capturing context now, even imperfectly. 
          Record yourself explaining a process. Interview the person who knows how 
          something really works. AI can help you clean up and structure this 
          information later, but first you need to get it out of people's heads 
          and into a form you can work with.
        </p>
      </section>

      <section aria-labelledby="hurdle-4" style={{ marginTop: "2.5rem" }}>
        <h2 id="hurdle-4">4. Uneven Skills and Cultural Hurdles</h2>
        <p>
          AI literacy varies widely across any team. Many staff are caught in the 
          "too busy to improve" paradox: they lack the bandwidth to learn new tools 
          precisely because they're drowning in the manual work those tools could 
          reduce.
        </p>
        <p>
          Then there's the cultural resistance. Some colleagues, often supervisors 
          or faculty, believe that using AI is lazy or that all AI output is 
          inherently questionable. This skepticism can shut down experimentation 
          before it starts.
        </p>
        <p>
          <strong>What to do:</strong> Lead with small, visible wins. Don't 
          evangelize. Show, don't tell. Find one workflow where AI saves real time, 
          document it, and let the results speak. Resistance fades when people see 
          concrete value delivered by someone they trust.
        </p>
      </section>

      <section aria-labelledby="next-steps" style={{ marginTop: "2.5rem" }}>
        <h2 id="next-steps">Once You've Addressed the Hurdles</h2>
        <p>
          Getting your context ready is the prerequisite. Once you've started 
          tackling these barriers, you're ready to build actual workflows using 
          the <a href="/resources/3d-framework">3D Framework: Define, Develop, Deploy</a>.
        </p>
      </section>

      <nav aria-label="Resources navigation" style={{ marginTop: "2.5rem" }}>
        <p>
          <a href="/resources">← Back to Resources</a>
        </p>
      </nav>
    </article>
  );
}

export const metadata = {
  title: "The 3D Framework: Define, Develop, Deploy | Aimee Oke",
  description:
    "A practical method for building AI workflows in research administration: Define your problem, Develop your context, Deploy with human review.",
};

export default function ThreeDFrameworkPage() {
  return (
    <article
      style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem", lineHeight: 1.7 }}
    >
      <h1>The 3D Framework</h1>
      <p style={{ fontSize: "1.1rem", color: "#444" }}>
        Define. Develop. Deploy.
      </p>
      
      <p>
        This framework is how I approach building AI workflows in research 
        administration. It's not about the technology. It's about being 
        systematic: know what problem you're solving, prepare your context, 
        and always keep humans in the loop.
      </p>
      <p>
        The challenge is never "how do I use ChatGPT?" The challenge is knowing 
        where to start and building something that actually works for your 
        specific situation.
      </p>

      <section aria-labelledby="define" style={{ marginTop: "2.5rem" }}>
        <h2 id="define">Define: Where Your Expertise Shines</h2>
        <p>
          Before you touch any AI tool, you need to get clear on three things. 
          This is where your institutional knowledge matters most.
        </p>
        
        <h3>1. Specific Problem</h3>
        <p>
          What repetitive task drains your time but requires your knowledge? Be 
          precise. Not "communication is hard" but "every NOFO analysis requires 
          extracting the same 15 data points and I do 30 of these per year."
        </p>
        <p>The more specific, the better the solution.</p>

        <h3>2. Outputs Desired</h3>
        <p>
          What does "done" look like? Who needs what format? If you're analyzing 
          funding opportunities, does the PI want a one-page summary? A comparison 
          table? Talking points for a meeting? Define the deliverable before you 
          build.
        </p>

        <h3>3. Data Risk Levels</h3>
        <p>
          What information is involved? Public data like NOFOs and agency strategic 
          plans? Internal documents? Anything with trainee information or proprietary 
          research? Your risk level determines which tools you can use and what 
          guardrails you need.
        </p>
        <p>
          Veterans know this instinctively. The key is to document it explicitly 
          so anyone can understand the workflow.
        </p>
      </section>

      <section aria-labelledby="develop" style={{ marginTop: "2.5rem" }}>
        <h2 id="develop">Develop: Building Your Knowledge Infrastructure</h2>
        <p>
          This is where you prepare everything the AI needs to actually help you. 
          Think of it as training a new employee, except you're structuring 
          information for a machine.
        </p>

        <h3>4. Capture Context</h3>
        <p>
          Document the knowledge that lives in your head and your colleagues' heads. 
          The examples, edge cases, exceptions, and preferences that make you good 
          at your job. Record interviews, transcribe meetings, pull together the 
          reference documents you actually use.
        </p>

        <h3>5. Clean and Structure</h3>
        <p>
          Make your information AI-ready. Create templates, decision trees, and 
          checklists. Think: if I were training someone new, what would they need 
          to see? Structure your context so it's searchable and usable.
        </p>

        <h3>6. Build Tools</h3>
        <p>
          Now you create the actual workflow: a custom GPT, a prompt template, or 
          an automated process. If you're not comfortable building, partner with 
          someone who is. Test with real scenarios. Your judgment validates whether 
          the outputs are actually useful.
        </p>
        <p>
          This is legacy building. You're not just solving today's problem. You're 
          creating systems that can outlast you.
        </p>
      </section>

      <section aria-labelledby="deploy" style={{ marginTop: "2.5rem" }}>
        <h2 id="deploy">Deploy: You Stay in Control</h2>
        <p>
          The human-in-the-loop isn't a weakness. It's the entire point. AI scales 
          your judgment. It does not replace it.
        </p>

        <h3>7. Generate Content</h3>
        <p>
          Let AI create the first draft based on your context. This is where you 
          get consistency at scale: the same quality, every time, handling the 
          repetitive heavy lifting so you can focus on the parts that need human 
          thinking.
        </p>

        <h3>8. Expert Review</h3>
        <p>
          This step is non-negotiable. You are the quality gatekeeper. Check for 
          accuracy, tone, completeness, and institutional fit. Refine the system 
          based on what needs correction. Every review makes the workflow better.
        </p>

        <h3>9. Distribute</h3>
        <p>
          Deploy the approved output to the right audiences. Track what works and 
          what doesn't. Iterate and improve. A good workflow gets better over time 
          as you learn from each cycle.
        </p>
      </section>

      <section aria-labelledby="example" style={{ marginTop: "2.5rem" }}>
        <h2 id="example">Example: NOFO Analysis Workflow</h2>
        <p>
          Here's how the framework applies to a common research development task: 
          analyzing funding opportunity announcements.
        </p>

        <h3>Define</h3>
        <p>
          <strong>Problem:</strong> Each NOFO takes 45 minutes to analyze, and you 
          review 30+ per year. Faculty need quick summaries to decide whether to 
          pursue.
        </p>
        <p>
          <strong>Output:</strong> A one-page brief with eligibility, key dates, 
          budget limits, review criteria summary, and fit assessment.
        </p>
        <p>
          <strong>Data risk:</strong> Low. NOFOs are public documents.
        </p>

        <h3>Develop</h3>
        <p>
          <strong>Capture:</strong> Your mental checklist of what makes an opportunity 
          worth pursuing for your institution. The questions faculty always ask.
        </p>
        <p>
          <strong>Structure:</strong> A template with consistent sections. A list of 
          your institution's strategic priorities to check against.
        </p>
        <p>
          <strong>Build:</strong> A prompt template or custom GPT that extracts the 
          key information and formats it consistently.
        </p>

        <h3>Deploy</h3>
        <p>
          <strong>Generate:</strong> Paste the NOFO, get a draft brief in 2 minutes.
        </p>
        <p>
          <strong>Review:</strong> Verify accuracy, add your institutional knowledge, 
          flag anything the AI missed.
        </p>
        <p>
          <strong>Distribute:</strong> Send to relevant faculty. Track which briefs 
          led to submissions.
        </p>

        <p style={{ marginTop: "1.5rem" }}>
          Total time drops from 45 minutes to 10. Multiply that by 30 opportunities 
          per year, and you've recovered meaningful capacity for higher-value work.
        </p>
      </section>

      <section aria-labelledby="getting-started" style={{ marginTop: "2.5rem" }}>
        <h2 id="getting-started">Getting Started</h2>
        <p>
          Pick one workflow. Something repetitive, time-consuming, and within your 
          control. Work through the nine steps. Learn what breaks and what works. 
          Then do it again with the next workflow.
        </p>
        <p>
          If you're finding it hard to even start, you may need to address your{" "}
          <a href="/resources/context-readiness">context readiness</a> first.
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

export const metadata = {
  title: "AI Literacy Resources | Aimee Oke",
  description:
    "Curated podcasts, books, substacks, and courses for research administrators building real AI fluency.",
};

export default function AILiteracyPage() {
  return (
    <article
      style={{ maxWidth: 720, margin: "2rem auto", padding: "0 1rem", lineHeight: 1.7 }}
    >
      <h1>Build Your AI Literacy</h1>
      
      <p>
        You don't need a computer science degree to become fluent in AI. You need 
        consistent exposure to good information and a willingness to experiment. 
        Here are the resources that helped me most, organized by how much time you 
        have.
      </p>

      <section aria-labelledby="podcasts" style={{ marginTop: "2.5rem" }}>
        <h2 id="podcasts">Podcasts</h2>
        <p>
          This is where I spend six to eight hours a week. Podcasts let you learn 
          while commuting, exercising, or doing tasks that don't require deep focus.
        </p>
        <ul style={{ marginTop: "1rem" }}>
          <li>
            <strong>The Artificial Intelligence Show</strong> (Marketing AI Institute) — 
            Mike Kaput and Paul Roetzer break down AI news weekly with a practical, 
            business-focused lens. Great for staying current.
          </li>
          <li>
            <strong>Everyday AI</strong> — 
            Approachable daily episodes focused on how regular professionals can 
            use AI tools. Good starting point if you're new.
          </li>
          <li>
            <strong>The AI Daily Brief</strong> — 
            Quick news updates to stay on top of what's happening in the field.
          </li>
          <li>
            <strong>Dwarkesh Patel</strong> — 
            Long-form interviews with researchers and founders. Goes deeper into 
            the technical and philosophical questions. Not beginner-level, but 
            incredibly valuable once you have some foundation.
          </li>
        </ul>
      </section>

      <section aria-labelledby="books" style={{ marginTop: "2.5rem" }}>
        <h2 id="books">Books</h2>
        <ul>
          <li>
            <strong>Co-Intelligence</strong> by Ethan Mollick — 
            The book that gave me "three sleepless nights." Mollick is a Wharton 
            professor who writes about AI with rigor and practicality. This is the 
            best single resource for understanding how to think about AI as a 
            professional. Start here.
          </li>
        </ul>
      </section>

      <section aria-labelledby="substacks" style={{ marginTop: "2.5rem" }}>
        <h2 id="substacks">Substacks and Blogs</h2>
        <p>
          These are writers I follow regularly. Most offer free tiers.
        </p>
        <ul style={{ marginTop: "1rem" }}>
          <li>
            <strong>One Useful Thing</strong> (Ethan Mollick) — 
            Practical, thoughtful posts on AI in education and work. Essential reading.
          </li>
          <li>
            <strong>Noahpinion</strong> (Noah Smith) — 
            Economics and technology commentary. Not AI-specific but often covers 
            the broader implications.
          </li>
          <li>
            <strong>Anecdotal Value</strong> — 
            Good for understanding AI applications in various contexts.
          </li>
          <li>
            <strong>Decision Intelligence</strong> — 
            Focuses on using data and AI for better decision-making.
          </li>
        </ul>
      </section>

      <section aria-labelledby="people" style={{ marginTop: "2.5rem" }}>
        <h2 id="people">People to Follow</h2>
        <p>
          These are researchers, builders, and thinkers whose work I find consistently 
          valuable. Following them helps you stay connected to where the field is 
          actually heading.
        </p>
        <ul style={{ marginTop: "1rem" }}>
          <li>
            <strong>Ethan Mollick</strong> — 
            Professor at Wharton. Best bridge between AI capabilities and practical 
            professional use.
          </li>
          <li>
            <strong>Andrej Karpathy</strong> — 
            Computer scientist, former OpenAI co-founder and Tesla AI Director. His 
            YouTube videos explaining how LLMs work are the best technical explainers 
            available for non-engineers.
          </li>
          <li>
            <strong>Dario Amodei</strong> — 
            CEO of Anthropic (the company behind Claude). Thoughtful on AI safety 
            and capabilities.
          </li>
          <li>
            <strong>Demis Hassabis</strong> — 
            CEO of Google DeepMind, 2024 Nobel Prize in Chemistry. Foundational 
            figure in modern AI.
          </li>
          <li>
            <strong>Geoffrey Hinton</strong> — 
            Professor Emeritus at University of Toronto, 2024 Nobel Prize in Physics. 
            One of the pioneers of deep learning.
          </li>
        </ul>
      </section>

      <section aria-labelledby="courses" style={{ marginTop: "2.5rem" }}>
        <h2 id="courses">Courses and Structured Learning</h2>
        <ul>
          <li>
            <strong>AI Mastery Academy</strong> (SmarterX) — 
            The program I've been enrolled in for a full year. Practical, updated 
            regularly, focused on professional application rather than theory.
          </li>
          <li>
            <strong>OpenAI Academy</strong> — 
            Free resources directly from OpenAI on using their tools effectively.
          </li>
        </ul>
      </section>

      <section aria-labelledby="deep-dives" style={{ marginTop: "2.5rem" }}>
        <h2 id="deep-dives">Going Deeper: Understanding How LLMs Work</h2>
        <p>
          You don't need to understand the technical details to use AI well. But 
          having a mental model of how these systems actually work helps you use 
          them more effectively and spot their limitations.
        </p>
        <ul style={{ marginTop: "1rem" }}>
          <li>
            <strong>Andrej Karpathy: Deep Dive into LLMs like ChatGPT</strong> (YouTube) — 
            The single best explainer video for understanding what's actually 
            happening inside a language model.
          </li>
          <li>
            <strong>Andrej Karpathy: Software Is Changing (Again)</strong> (YouTube) — 
            Broader context on how AI is reshaping software development.
          </li>
          <li>
            <strong>Anthropic: Interpretability Research</strong> — 
            For those who want to understand how researchers are trying to 
            understand how AI models "think."
          </li>
        </ul>
      </section>

      <section aria-labelledby="advice" style={{ marginTop: "2.5rem" }}>
        <h2 id="advice">My Advice</h2>
        <p>
          Start with Ethan Mollick's book and one podcast. Give yourself a few 
          weeks of consistent exposure before trying to build anything. Let the 
          concepts settle. Then pick a small workflow and experiment.
        </p>
        <p>
          Literacy comes from repetition, not intensity. Thirty minutes a day beats 
          a weekend crash course every time.
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

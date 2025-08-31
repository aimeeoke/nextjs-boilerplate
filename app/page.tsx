export const metadata = {
  title: "Aimee Oke — AI for Academia",
  description: "Open-access GPTs, wikis, and apps for higher ed.",
};


export default function HomePage() {
  return (
    <section style={{maxWidth:960, margin:"2rem auto", padding:"0 1rem"}}>
      <h1>Practical AI for Academia — by Aimee Oke</h1>
      <p>
        I build open-access GPTs, wikis, and small apps that reduce administrative
        burden and grow AI literacy for faculty and research administrators.
      </p>

      <p style={{marginTop:"1rem"}}>
        <a href="/resources">Explore Resources →</a> &nbsp; | &nbsp;
        <a href="/about">My AI Journey</a> &nbsp; | &nbsp;
        <a href="/contact">Let’s Connect</a>
      </p>
    </section>
  );
}

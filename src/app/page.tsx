import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = d
    .toLocaleString("en-US", { month: "short" })
    .toLowerCase();
  return `${year} · ${month}`;
}

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <main className="home-wrap">
      <h1>
        Boyan Lin <em>— software &amp; small things.</em>
      </h1>
      <div className="tagline">
        Software engineer drawn to the seams of systems — protocols, schemas,
        and the tiny negotiations between them.
      </div>

      <h2>Writing</h2>
      {allPostsData.map(({ id, date, title }) => (
        <Link href={`/blog/${id}`} className="post-row" key={id}>
          <span className="post-date">{formatDate(date)}</span>
          <span className="post-title">{title}</span>
        </Link>
      ))}

      <h2>Work</h2>
      <p>
        For projects, experience, and a full professional history, see my{" "}
        <Link href="/resume">résumé</Link>.
      </p>

      <h2>Elsewhere</h2>
      <div className="elsewhere">
        <a href="https://github.com/bryanboyan">github</a>
        <a href="https://linkedin.com/in/boyanlin">linkedin</a>
        <a href="mailto:blin.boyan@gmail.com">mail</a>
      </div>

      <footer className="home-footer">© 2026 · boyanlin.com</footer>
    </main>
  );
}

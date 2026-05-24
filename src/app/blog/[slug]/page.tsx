import Link from "next/link";
import { getPostData, getSortedPostsData } from "../../../lib/posts";

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <article className="blog-wrap">
      <Link href="/" className="back-link">
        ← back
      </Link>

      <header style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          {postData.title}
        </h1>
        <time
          style={{ color: "var(--mut)", fontSize: "12px", letterSpacing: "0.08em" }}
        >
          {postData.date}
        </time>
      </header>

      <div
        className="prose"
        style={{ maxWidth: "62ch" }}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px dashed var(--rule)" }}>
        <Link href="/" className="back-link" style={{ marginBottom: 0 }}>
          ← back to home
        </Link>
      </div>
    </article>
  );
}

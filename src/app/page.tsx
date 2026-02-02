
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <div className="z-10 w-full max-w-2xl items-center justify-between text-sm flex-col">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-2">My Personal Blog</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Thoughts, stories, and ideas.</p>
        </header>

        <section className="w-full">
          <ul className="flex flex-col gap-8">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="group relative border-b border-zinc-200 dark:border-zinc-800 pb-8 last:border-0 last:pb-0">
                <Link href={`/blog/${id}`} className="block">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                    <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {title}
                    </h2>
                    <time className="text-sm text-zinc-500 whitespace-nowrap font-mono">{date}</time>
                  </div>
                  {/* Optional: Add description if available in frontmatter */}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

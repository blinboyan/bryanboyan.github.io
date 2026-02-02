
import Link from 'next/link';
import { getPostData, getSortedPostsData } from '../../../lib/posts';

export async function generateStaticParams() {
    const posts = await getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <article className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans p-8 md:p-24 flex justify-center">
            <div className="w-full max-w-2xl prose prose-zinc dark:prose-invert">
                <header className="mb-8 border-b pb-4 dark:border-zinc-800">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">{postData.title}</h1>
                    <time className="text-zinc-500 font-mono text-sm">{postData.date}</time>
                </header>

                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                <div className="mt-12 pt-8 border-t dark:border-zinc-800">
                    <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">← Back to home</Link>
                </div>
            </div>
        </article>
    );
}

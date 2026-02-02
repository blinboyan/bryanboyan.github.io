# My Personal Blog

This is a personal blog website built with Next.js, Tailwind CSS, and Markdown. It is designed to be hosted on GitHub Pages.

## How to Write a Blog Post

1. Create a new markdown file in the `posts/` directory. Use a unique filename (e.g., `my-new-post.md`).
2. Add the following frontmatter at the top of the file:

```markdown
---
title: "My New Post Title"
date: "2024-01-01"
---

# Your Heading

Write your content here using **Markdown**.
```

3. Commit and push your changes. The site will automatically build and deploy if you have GitHub Actions enabled.

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project comes with a valid GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. Push this code to a GitHub repository (e.g., `yourname.github.io`).
2. Go to the repository **Settings** > **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The deployment workflow should run automatically on every push to `main`.

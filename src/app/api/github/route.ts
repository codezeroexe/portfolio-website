import { NextResponse } from "next/server";

// GitHub API to fetch user's most recent repos
// Replace 'codezeroexe' with your GitHub username

export async function GET() {
  try {
    const username = "codezeroexe"; // Your GitHub username
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=3`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Optional: add token for higher rate limit
          // Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const repos = await res.json();

    const projects = repos.slice(0, 3).map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description available",
      tags: repo.topics?.length > 0 ? repo.topics : [repo.language].filter(Boolean),
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || repo.html_url,
    }));

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("GitHub API error:", error);
    // Fallback to placeholder data
    return NextResponse.json({
      projects: [
        {
          id: "1",
          name: "Portfolio Website",
          description: "Modern portfolio built with Next.js, TypeScript, and Tailwind CSS",
          tags: ["Next.js", "TypeScript", "Tailwind"],
          githubUrl: "https://github.com/codezeroexe/portfolio-website",
          liveUrl: "https://portfolio-website.vercel.app",
        },
        {
          id: "2",
          name: "AI Content Generator",
          description: "AI-powered tool for generating blog posts and social media content",
          tags: ["Python", "OpenAI", "FastAPI"],
          githubUrl: "https://github.com/codezeroexe/ai-content-gen",
          liveUrl: "https://example.com",
        },
        {
          id: "3",
          name: "E-Commerce Platform",
          description: "Full-stack online store with cart, checkout, and payment integration",
          tags: ["React", "Next.js", "Stripe"],
          githubUrl: "https://github.com/codezeroexe/ecommerce-platform",
          liveUrl: "https://example.com",
        },
      ],
    });
  }
}

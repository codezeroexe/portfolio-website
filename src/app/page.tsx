"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialButtons } from "@/components/social-buttons";
import { ProjectCard } from "@/components/project-card";
import { useEffect, useState } from "react";

interface GitHubRepo {
  id: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.projects || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <Avatar className="h-64 w-64 mb-6">
            <AvatarImage src="/avatar.jpg" alt="Sreehari" />
            <AvatarFallback className="text-8xl">S</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="font-[family-name:var(--font-gluten)] text-primary" style={{ fontSize: '130%' }}>Hari</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Full-Stack Developer & Designer building modern web experiences
          </p>
          <div className="flex gap-4">
            <Button onClick={() => window.location.href = '#projects'}>View My Work</Button>
            <Button variant="outline" onClick={() => window.location.href = '#contact'}>Get In Touch</Button>
            <ThemeToggle />
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="font-[family-name:var(--font-gluten)]" style={{ fontSize: '130%' }}>Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            <p className="mb-4">
              I'm a {new Date().getFullYear() - 2006}-year-old developer from Kerala, South India, currently pursuing Artificial Intelligence at Symbiosis, Pune. My work sits at the intersection of creative expression and technical precision.
            </p>
            <p>
              I build with Python, JavaScript, Java, and React — focusing on AI systems, neural networks, deep learning, web development, and web design. Digital art and design are where I experiment with the creative side of code, bringing visual ideas to life through technology.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            {["React", "Next.js", "TypeScript", "Java", "Python", "Web Design", "AI/ML"].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            GitHub <span className="font-[family-name:var(--font-gluten)]" style={{ fontSize: '130%' }}>Projects</span>
          </h2>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-[#EAEAEA] rounded-lg p-8 bg-white dark:bg-[#1A1A1A]">
                  <div className="h-6 w-48 bg-muted animate-pulse rounded mb-4" />
                  <div className="h-4 bg-muted animate-pulse rounded mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-muted animate-pulse rounded-full" />
                    <div className="h-6 w-20 bg-muted animate-pulse rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <div key={repo.id} className="border border-[#EAEAEA] rounded-lg p-8 bg-white dark:bg-[#1A1A1A] hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{repo.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{repo.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {repo.tags.map((tag: string) => (
                      <span key={tag} className="text-xs border border-[#EAEAEA] rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">GitHub</a>
                    {repo.liveUrl && (
                      <a href={repo.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Live Demo</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <Separator />

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="font-[family-name:var(--font-gluten)]" style={{ fontSize: '130%' }}>Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => window.location.href = 'mailto:sreehari@example.com'}>Email Me</Button>
            <SocialButtons />
            <Button variant="outline" onClick={() => window.location.href = 'https://www.instagram.com/code.zxro/'}>
              Instagram
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sreehari. All rights reserved.
          </div>
        </footer>
    </main>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialButtons } from "@/components/social-buttons";
import { ArticleCard } from "@/components/ui/blog-post-card";
import { useRef } from "react";

interface Project {
  id: string;
  headline: string;
  excerpt: string;
  tags: string[];
  githubUrl: string;
  publishedAt?: Date;
}

const projects: Project[] = [
  {
    id: "1",
    headline: "Neural Fraud Detector v2",
    excerpt: "AI-powered fraud detection system using neural networks and deep learning",
    tags: ["Python", "TensorFlow", "AI/ML", "Neural Networks"],
    githubUrl: "https://github.com/codezeroexe/neural-fraud-detector-v2",
    publishedAt: new Date("2025-10-01"),
  },
  {
    id: "2",
    headline: "Walking Sim",
    excerpt: "Interactive walking simulator built with modern web technologies",
    tags: ["JavaScript", "Three.js", "WebGL", "Game Dev"],
    githubUrl: "https://github.com/codezeroexe/walking-sim",
    publishedAt: new Date("2025-08-15"),
  },
  {
    id: "3",
    headline: "Algo Visualizer",
    excerpt: "Interactive algorithm visualization tool for learning data structures and algorithms",
    tags: ["React", "TypeScript", "D3.js", "Education"],
    githubUrl: "https://github.com/codezeroexe/algo-visualizer",
    publishedAt: new Date("2025-06-20"),
  },
  {
    id: "4",
    headline: "SymbiPath",
    excerpt: "Symbiosis path management system for academic and research collaboration",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Full-Stack"],
    githubUrl: "https://github.com/codezeroexe/symbiPath",
    publishedAt: new Date("2025-11-15"),
  },
];

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
            <Button onClick={() => scrollTo(projectsRef)}>View My Work</Button>
            <Button variant="outline" onClick={() => scrollTo(contactRef)}>Get In Touch</Button>
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
        <section id="projects" ref={projectsRef} className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            GitHub <span className="font-[family-name:var(--font-gluten)]" style={{ fontSize: '130%' }}>Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:shadow-lg transition-shadow"
              >
                <ArticleCard
                  headline={project.headline}
                  excerpt={project.excerpt}
                  tag={project.tags[0]}
                  readingTime={300}
                  writer="codezeroexe"
                  publishedAt={project.publishedAt}
                />
              </a>
            ))}
          </div>
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

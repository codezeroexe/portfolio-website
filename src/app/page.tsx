"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialButtons } from "@/components/social-buttons";
import { ArticleCard } from "@/components/ui/blog-post-card";
import { MeshGradient } from "@paper-design/shaders-react";
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
    publishedAt: new Date("2026-04-22"),
  },
  {
    id: "2",
    headline: "Walking Sim",
    excerpt: "Interactive walking simulator built with modern web technologies",
    tags: ["JavaScript", "Three.js", "WebGL", "Game Dev"],
    githubUrl: "https://github.com/codezeroexe/walking-sim",
    publishedAt: new Date("2026-03-08"),
  },
  {
    id: "3",
    headline: "Algo Visualizer",
    excerpt: "Interactive algorithm visualization tool for learning data structures and algorithms",
    tags: ["React", "TypeScript", "D3.js", "Education"],
    githubUrl: "https://github.com/codezeroexe/algo-visualizer",
    publishedAt: new Date("2026-03-04"),
  },
  {
    id: "4",
    headline: "SymbiPath",
    excerpt: "Symbiosis path management system for academic and research collaboration",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Full-Stack"],
    githubUrl: "https://github.com/codezeroexe/symbiPath",
    publishedAt: new Date("2026-04-20"),
  },
];

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen">
        {/* Hero Shader Background */}
        <div className="fixed inset-0 -z-10">
          <MeshGradient
            colors={['#8b0000', '#dc2626', '#ff4444', '#dc143c', '#b22222', '#000000', '#1a1a1a', '#333333', '#0a0a0a']}
            distortion={1}
            swirl={0.8}
            speed={0.2}
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle overlay - let shader show */}
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <Avatar className="h-64 w-64 mb-6">
            <AvatarImage src="/avatar.jpg" alt="Sreehari" />
            <AvatarFallback className="text-8xl">S</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
             Hi, I'm <span className="[font-family:var(--font-gluten)] text-primary" style={{ fontSize: '130%' }}>Hari</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            AI developer & web designer blending code with creative expression.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => scrollTo('projects')}>View My Work</Button>
            <Button variant="outline" onClick={() => scrollTo('contact')}>Get In Touch</Button>
            <ThemeToggle />
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
             About <span className="[font-family:var(--font-gluten)]" style={{ fontSize: '130%' }}>Me</span>
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

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="[font-family:var(--font-gluten)]" style={{ fontSize: '130%' }}>Skills</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { category: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"] },
              { category: "Frontend", skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Framer Motion"] },
              { category: "AI/ML", skills: ["TensorFlow", "Neural Networks", "Deep Learning", "Data Analysis", "Scikit-learn"] },
              { category: "Tools & Design", skills: ["Git/GitHub", "Web Design", "UI/UX", "PostgreSQL", "Three.js", "Digital Art"] },
            ].map(({ category, skills }) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-3 text-muted-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
             GitHub <span className="[font-family:var(--font-gluten)]" style={{ fontSize: '130%' }}>Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto auto-rows-fr">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:shadow-lg transition-shadow h-full"
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
             Get In <span className="[font-family:var(--font-gluten)]" style={{ fontSize: '130%' }}>Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Reach out on LinkedIn, check my GitHub and Instagram, or drop an email.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => window.location.href = 'mailto:sreeharisreelakam06@gmail.com'}>Email Me</Button>
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

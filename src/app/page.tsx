"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialButtons } from "@/components/social-buttons";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
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
              I'm a passionate developer with experience building modern web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              My tech stack includes React, Next.js, TypeScript, Node.js, and various
              modern frameworks. I'm always learning and exploring new technologies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Shadcn UI"].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              description="Full-stack online store with cart, checkout, and payment integration."
              tags={["Next.js", "Stripe", "PostgreSQL"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Task Management App"
              description="Collaborative project management tool with real-time updates."
              tags={["React", "Socket.io", "MongoDB"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="AI Content Generator"
              description="AI-powered tool for generating blog posts and social media content."
              tags={["Next.js", "OpenAI", "Tailwind"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </section>

        <Separator />

        {/* Instagram Art Section */}
        <section id="instagram" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="font-[family-name:var(--font-gluten)]" style={{ fontSize: '130%' }}>Instagram</span> Art
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1618005182475?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1541961017774-49094a54b5a?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1513475382585-d06e58b067a5?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1579546929518-7e594785ab97?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg border border-[#EAEAEA]">
                <img
                  src={src}
                  alt={`Instagram art ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
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

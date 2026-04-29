"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialButtons } from "@/components/social-buttons";
import { ArticleCard } from "@/components/ui/blog-post-card";
import { MeshGradient } from "@paper-design/shaders-react";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const lightColors = ['#0c1445', '#1e2a5c', '#1a237e', '#283593', '#303f9f', '#1a237e', '#0d47a1', '#e3f2fd', '#bbdefb', '#ffffff', '#f8f9fa', '#e8eaf6'];
  const darkColors = ['#8b0000', '#dc2626', '#ff4444', '#dc143c', '#b22222', '#000000', '#1a1a1a', '#333333', '#0a0a0a'];

  return (
    <main className="relative min-h-screen">
        {/* Hero Shader Background - Frosted Glass */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-[-20%] blur-2xl">
            <MeshGradient
              colors={isDark ? darkColors : lightColors}
              distortion={1}
              swirl={0.8}
              speed={0.2}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Frosted glass overlay - theme aware */}
          <div className={`absolute inset-0 backdrop-blur-xl ${isDark ? 'bg-background/70' : 'bg-background/35'}`} />
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '256px 256px',
            }}
          />
        </div>

        {/* Hero Section - Concept 4: Scroll Fade-In */}
        <motion.section
          className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Concept 3: Avatar Hover Pulse */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Avatar className="h-64 w-64 mb-6 hover:ring-4 hover:ring-primary/30 transition-all">
              <AvatarImage src="/avatar.jpg" alt="Sreehari" />
              <AvatarFallback className="text-8xl">S</AvatarFallback>
            </Avatar>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
             Hi, I'm <span className="[font-family:var(--font-gluten)] text-primary drop-shadow-[0_0_10px_rgba(var(--primary)/0.5)]" style={{ fontSize: '130%' }}>Hari</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl">
            AI developer & web designer blending code with creative expression.
          </p>
          <div className="flex gap-4 relative z-10">
            {/* Concept 1: Button Hover Glow */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => scrollTo('projects')} className="hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow">View My Work</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" onClick={() => scrollTo('contact')} className="border-white/30 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow">Get In Touch</Button>
            </motion.div>
            {/* Concept 6: Theme Toggle Rotate */}
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <ThemeToggle />
            </motion.div>
          </div>
        </motion.section>

        {/* About Section - Concept 4: Scroll Fade-In */}
        <motion.section
          id="about"
          className="container mx-auto px-4 py-16 md:py-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="[font-family:var(--font-gluten)] text-primary drop-shadow-[0_0_10px_rgba(var(--primary)/0.5)]" style={{ fontSize: '130%' }}>Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed">
            <p className="mb-4">
              I'm a {new Date().getFullYear() - 2006}-year-old developer from Kerala, South India, currently pursuing Artificial Intelligence at Symbiosis, Pune. My work sits at the intersection of creative expression and technical precision.
            </p>
            <p>
              I build with Python, JavaScript, Java, and React — focusing on AI systems, neural networks, deep learning, web development, and web design. Digital art and design are where I experiment with the creative side of code, bringing visual ideas to life through technology.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            {["React", "Next.js", "TypeScript", "Java", "Python", "Web Design", "AI/ML"].map((tech) => (
              /* Concept 2: Badge Hover Lift */
              <motion.div
                key={tech}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge variant="secondary">{tech}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section - Concept 4: Scroll Fade-In */}
        <motion.section
          id="skills"
          className="container mx-auto px-4 py-16 md:py-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="[font-family:var(--font-gluten)] text-primary drop-shadow-[0_0_10px_rgba(var(--primary)/0.5)]" style={{ fontSize: '130%' }}>Skills</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            {[
              { category: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"] },
              { category: "Frontend", skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Framer Motion"] },
              { category: "AI/ML", skills: ["TensorFlow", "Neural Networks", "Deep Learning", "Data Analysis", "Scikit-learn"] },
              { category: "Tools & Design", skills: ["Git/GitHub", "Web Design", "UI/UX", "PostgreSQL", "Three.js", "Digital Art"] },
            ].map(({ category, skills }) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-3 text-foreground/80">{category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill) => (
                    /* Concept 2: Badge Hover Lift */
                    <motion.div
                      key={skill}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Badge variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section - Concept 4: Scroll Fade-In */}
        <motion.section
          id="projects"
          className="container mx-auto px-4 py-16 md:py-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            GitHub <span className="[font-family:var(--font-gluten)] text-primary drop-shadow-[0_0_10px_rgba(var(--primary)/0.5)]" style={{ fontSize: '130%' }}>Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto auto-rows-fr">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:shadow-lg transition-shadow h-full rounded-lg overflow-hidden"
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section - Concept 4: Scroll Fade-In */}
        <motion.section
          id="contact"
          className="container mx-auto px-4 py-16 md:py-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="[font-family:var(--font-gluten)] text-primary drop-shadow-[0_0_10px_rgba(var(--primary)/0.5)]" style={{ fontSize: '130%' }}>Touch</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
            Reach out on LinkedIn, check my GitHub and Instagram, or drop an email.
          </p>
          <div className="flex justify-center gap-4">
            {/* Concept 1: Button Hover Glow */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => window.location.href = 'mailto:sreeharisreelakam06@gmail.com'} className="hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow">Email Me</Button>
            </motion.div>
            <SocialButtons />
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-foreground/80">
            © {new Date().getFullYear()} Sreehari. All rights reserved.
          </div>
        </footer>
    </main>
  );
}

"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiExternalLinkFill } from "@remixicon/react";

interface ProjectCardProps {
  headline: string;
  excerpt: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export function ProjectCard({ headline, excerpt, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{headline}</CardTitle>
        <CardDescription className="text-base">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" onClick={() => window.open(githubUrl, "_blank")}>
            <RiGithubFill className="h-4 w-4 mr-2" />
            Code
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" onClick={() => window.open(liveUrl, "_blank")}>
            <RiExternalLinkFill className="h-4 w-4 mr-2" />
            Live Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

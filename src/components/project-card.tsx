import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiExternalLinkFill } from "@remixicon/react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export function ProjectCard({ title, description, tags, liveUrl, githubUrl, image }: Project) {
  return (
    <Card className="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300">
      {image && (
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
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
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <RiGithubFill className="h-4 w-4 mr-2" />
            Code
          </Button>
        )}
        {liveUrl && (
          <Button
            size="sm"
            onClick={() => window.open(liveUrl, "_blank")}
          >
            <RiExternalLinkFill className="h-4 w-4 mr-2" />
            Live Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

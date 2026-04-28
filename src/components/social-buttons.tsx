"use client";

import { Button } from "@/components/ui/button";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramFill,
} from "@remixicon/react";

const socials = [
  { name: "GitHub", href: "https://github.com/codezeroexe", icon: RiGithubFill },
  { name: "LinkedIn", href: "https://linkedin.com/in/srhari06/", icon: RiLinkedinFill },
  { name: "Instagram", href: "https://www.instagram.com/code.zxro/", icon: RiInstagramFill },
];

export function SocialButtons() {
  return (
    <div className="flex gap-2">
      {socials.map(({ name, href, icon: Icon }) => (
        <Button
          key={name}
          variant="outline"
          size="icon"
          onClick={() => window.open(href, "_blank")}
          aria-label={name}
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}

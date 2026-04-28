"use client";

import { Button } from "@/components/ui/button";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "@remixicon/react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: RiGithubFill,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: RiLinkedinFill,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: RiInstagramFill,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: RiTwitterXFill,
  },
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

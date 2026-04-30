"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RiArrowUpSLine } from "@remixicon/react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg border-primary/30 bg-background/80 backdrop-blur"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <RiArrowUpSLine className="h-5 w-5" />
    </Button>
  );
}

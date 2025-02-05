"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mb-8">
      <Button variant="outline" size="icon">
        <Link href="https://github.com/Vincent4470" target="_blank">
          <Github className="h-5 w-5" />
        </Link>
      </Button>
      <Button variant="outline" size="icon">
        <Link href="https://www.linkedin.com/in/vincent-edwin-210a0319b/" target="_blank">
          <Linkedin className="h-5 w-5" />
        </Link>
      </Button>
      <Button variant="outline" size="icon">
        <Link href="https://www.instagram.com/vvincent672/" target="_blank">
          <Instagram className="h-5 w-5" />
        </Link>
      </Button>
      <Button variant="outline" size="icon">
        <Link href="https://facebook.com" target="_blank">
          <Facebook className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}

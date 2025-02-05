"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-xl font-bold text-primary"
        >
          <span className="text-blue-500">HeyCent</span>
        </motion.div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

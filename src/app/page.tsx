"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online store operations with real-time analytics and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Social Media Platform",
    description: "A modern social networking platform with real-time messaging, post sharing, and user interactions.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop interface and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Vue.js", "Vuex", "Express.js", "MySQL"],
    link: "#"
  }
];

const techStack = {
  programming: [
    { name: "HTML", level: "Expert", icon: "/html5.svg" },
    { name: "CSS", level: "Expert", icon: "/css3.svg" },
    { name: "JavaScript", level: "Intermediate", icon: "/javascript.svg" },
    { name: "TypeScript", level: "Intermediate", icon: "/typescript.svg" },
    { name: "Golang", level: "Beginner", icon: "/golang.svg" },
    { name: "Python", level: "Beginner", icon: "/python.svg" }
  ],
  frameworks: [
    { name: "React", icon: "/react.svg" },
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "Vue.js", icon: "/vue.svg" },
    { name: "Express.js", icon: "/express.svg" }
  ],
  databases: [
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "MySQL", icon: "/mysql.svg" }
  ]
};

const services = [
  {
    id: "01",
    title: "Fullstack Developer",
    description: "A fullstack developer must possess a wide range of skills, including proficiency in frontend technologies like Next.js, React.js, Tailwind CSS, and Typescript, as well as backend technologies such as Express.js with Node.js, ORM Sequelize, and MongoDB database, to create seamless and fully functional web applications"
  },
  {
    id: "02",
    title: "Frontend Developer",
    description: "Frontend development focuses on creating the visual and interactive elements of a website, ensuring that the user interface is both aesthetically pleasing and user-friendly"
  },
  {
    id: "03",
    title: "Web Developer",
    description: "A web developer must be proficient in various programming languages Golang, React.js, Javascript, and Typescript, as well as understanding responsiveness and accessibility to create attractive and functional websites"
  },
  {
    id: "04",
    title: "Graphic Designer",
    description: "Turn what you have in mind of digital product into reality, for any platform you consider"
  }
];

export default function Home() {
  const downloadCV = () => {
    // Replace with your CV file URL
    const cvUrl = "/path-to-your-cv.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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

      <main className="pt-24">
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi There 👋
                <br />
                I'm <span className="text-blue-500">HeyCent.</span>
                <br />
                Frontend Developer
              </h1>
              <p className="text-muted-foreground mb-8">
                I am a Front End web developer who enjoys building beautiful web applications
                that delivers a better user experience.
              </p>
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
              <div className="flex gap-4">
                <Button>Contact Me</Button>
                <Button variant="outline" onClick={downloadCV}>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="tech-stack" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="text-blue-500">⚙️</span> Tech Stack
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Programming</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {techStack.programming.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card p-4 rounded-lg text-center"
                    >
                      <div className="mb-2">
                        <Image src={tech.icon} alt={tech.name} width={48} height={48} className="mx-auto" />
                      </div>
                      <h4 className="font-medium">{tech.name}</h4>
                      <Badge variant="secondary" className="mt-2">{tech.level}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="container mx-auto px-4 py-20 bg-muted/50">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="text-blue-500">🛠️</span> Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-4xl font-bold text-blue-500">{service.id}</span>
                        <span>{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="portfolio" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="text-blue-500">💼</span> Recent Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={project.link} target="_blank">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2025 HeyCent. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
import { TechStackItem } from "@/types/tech-stack";
import {
  MonitorSmartphone,
  Code2,
  Server,
  Brain,
  Cloud,
  Database,
  Container,
  Palette,
} from "@/declarations/icons";

export const TECH_STACK: TechStackItem[] = [
  { name: "Next.js", icon: MonitorSmartphone, desc: "Edge Performance" },
  { name: "TypeScript", icon: Code2, desc: "Type-Safe Scale" },
  { name: "Node.js", icon: Server, desc: "High-Throughput" },
  { name: "OpenAI", icon: Brain, desc: "AI Integration" },
  { name: "AWS", icon: Cloud, desc: "Global Scale" },
  { name: "PostgreSQL", icon: Database, desc: "Data Integrity" },
  { name: "Docker", icon: Container, desc: "CI/CD Velocity" },
  { name: "Tailwind", icon: Palette, desc: "Premium UI" },
];

import { AuditPillar } from "@/types/discovery";
import {
  Layers,
  Cpu,
  ShieldCheck,
  BarChart3,
  MessageSquare,
  Zap,
  Mail,
} from "@/declarations/icons";

export const EXPECT_ITEMS = [
  {
    icon: MessageSquare,
    text: "Free 30-min discovery call to understand your goals",
  },
  {
    icon: Zap,
    text: "A clear proposal within 48 hours — no waiting weeks",
  },
  {
    icon: Mail,
    text: "Direct line to a senior engineer, not a sales rep",
  },
];

export const AUDIT_PILLARS: AuditPillar[] = [
  {
    icon: Layers,
    title: "Architecture Assessment",
    desc: "Frontend, backend, and database architecture review — monolith vs. microservices readiness.",
  },
  {
    icon: Cpu,
    title: "Scalability Score",
    desc: "Multi-tenancy readiness, horizontal scaling capability, and CI/CD maturity index.",
  },
  {
    icon: ShieldCheck,
    title: "Security Snapshot",
    desc: "Authentication architecture, data isolation patterns, and compliance exposure analysis.",
  },
  {
    icon: BarChart3,
    title: "Cost Efficiency",
    desc: "Cloud spend vs. utilization ratio with estimated savings projection at 10× scale.",
  },
];

export const DISCOVERY_DELIVERABLES: string[] = [
  "System Architecture Blueprint",
  "Database Schema & Data Model Design",
  "UI/UX Wireframes (5–8 key screens)",
  "Technology Stack Recommendation",
  "Architecture Validation & Risk Assessment",
  "8–12 Week Sprint Plan",
  "Banded Cost Estimate (Good / Better / Best)",
  "60-Minute Live Walkthrough",
];

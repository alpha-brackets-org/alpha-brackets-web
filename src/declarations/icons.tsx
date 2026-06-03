import React from "react";
/**
 * This file serves as a centralized abstraction layer for all icons used in the project.
 * To change the icon library (e.g., from lucide-react to another), simply update the imports here.
 */

// --- Third Party Icons (Lucide React) ---
import {
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  ChevronDown,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  AlertTriangle,
  Home,
  ArrowLeft,
  Plus,
  Minus,
  ExternalLink,
  Star,
  MessageSquare,
  CheckCircle2,
  Play,
  ChevronUp,
  Users,
  Code,
  Rocket,
  Menu,
  X,
  Search,
  Send,
  HelpCircle,
  Calendar,
  User,
  Tag,
  Filter,
  ShieldCheck,
  Target,
  Briefcase,
  MonitorSmartphone,
  Code2,
  Server,
  Brain,
  Cloud,
  Database,
  Container,
  Palette,
  Smartphone,
  Bot,
  Megaphone,
  BarChart,
  Layers,
  Cpu,
  BarChart3,
  FileCheck,
  Building2,
  Lightbulb,
  Globe,
  // Types
  type LucideIcon,
} from "lucide-react";

export {
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  ChevronDown,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  AlertTriangle,
  Home,
  ArrowLeft,
  Plus,
  Minus,
  ExternalLink,
  Star,
  MessageSquare,
  CheckCircle2,
  Play,
  ChevronUp,
  Users,
  Code,
  Rocket,
  Menu,
  X,
  Search,
  Send,
  HelpCircle,
  Calendar,
  User,
  Tag,
  Filter,
  ShieldCheck,
  Target,
  Briefcase,
  MonitorSmartphone,
  Code2,
  Server,
  Brain,
  Cloud,
  Database,
  Container,
  Palette,
  Smartphone,
  Bot,
  Megaphone,
  BarChart,
  Layers,
  Cpu,
  BarChart3,
  FileCheck,
  Building2,
  Lightbulb,
  Globe,
  type LucideIcon,
};

// --- Custom Brand Icons ---
export const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.353-2.612-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 2.16c3.203 0 3.584.013 4.85.072 2.45.112 3.769 1.423 3.881 3.881.058 1.266.072 1.646.072 4.85s-.014 3.584-.072 4.85c-.112 2.447-1.423 3.769-3.881 3.881-1.266.059-1.646.072-4.85.072s-3.584-.013-4.85-.072c-2.45-.112-3.769-1.423-3.881-3.881C2.173 15.584 2.16 15.203 2.16 12s.013-3.584.072-4.85c.112-2.45 1.423-3.769 3.881-3.881 1.266-.059 1.646-.072 4.85-.072zm0 3.674A6.165 6.165 0 1012 18.165 6.165 6.165 0 0012 5.834zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export const Dribbble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.93-6.412-.43.13.35.247.712.35 1.077 3.238-.13 5.753.945 6.062 1.083.21-.546.33-1.13.33-1.73zM12 1.875c-4.52 0-8.314 2.94-9.61 7.04 2.05-.182 5.3-.23 8.397.432.115-.226.223-.455.334-.684.28-.58.543-1.164.773-1.748-1.21-.527-2.39-1.425-2.695-1.666-.35-.27-.2-.832.22-.84 1.13-.02 3.16.89 4.316 1.44.205-.445.394-.89.56-1.336A10.106 10.106 0 0012 1.875zm-1.397 7.733c-.113.235-.226.473-.342.713-3.155-.514-6.333-.36-9.155.19-.012.162-.02.325-.02.489a10.113 10.113 0 003.542 7.71c.07-.107.142-.213.217-.32 1.35-1.92 3.86-3.79 7.42-4.135-.18-.456-.375-.91-.56-1.352-.04-.093-.076-.19-.115-.285-.35.01-.693.01-.987.01zm7.105 4.545c-2.454-.51-5.06-.057-7.465.413 1.25 3.322 1.76 6.84 1.82 8.423a10.134 10.134 0 006.183-5.228c-.14-.07-.463-.197-.538-.23zm-8.81 1.7c-3.18.234-5.36 1.704-6.42 2.585a10.098 10.098 0 006.666 4.417c-.033-.18-.474-3.66.42-7-.25.01-.434.01-.66.01zm11.3 2.14c-.33-.135-2.37-1.023-5.39-.99-.07-.223-.153-.448-.242-.676 2.766-.464 5.25.132 5.562.213.04.143.064.293.07.453z" />
  </svg>
);

export const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.002-4.125 2.062 2.062 0 01-0.002 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

export const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

export const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.015 3.015 0 002.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Behance = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.918 2.338-5.675 5.604-5.675 3.12 0 5.336 1.703 5.336 5.675V15h-8.081c.21 1.787 1.547 2.455 3.01 2.455 1.579 0 2.213-.807 2.502-1.455H23.726zM19.168 11.4c-.16-1.545-1.293-2.193-2.327-2.193-1.096 0-2.146.685-2.298 2.193h4.625zM10.825 15.65c0 2.274-1.895 3.35-4.214 3.35H0V6h6.417c2.189 0 3.834 1.157 3.834 3.153 0 1.546-1.074 2.38-2.196 2.607 1.402.227 2.77 1.34 2.77 3.89zm-6.721-4.708H2.868v3.424h1.236c.983 0 1.966-.272 1.966-1.712 0-1.44-.983-1.712-1.966-1.712zm-.458-3.411H2.868v3.085h.778c.849 0 1.698-.24 1.698-1.543 0-1.302-.849-1.542-1.698-1.542z" />
  </svg>
);

export const QuoteBg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256.721 208.227"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    opacity="0.322"
    {...props}
  >
    <path
      d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
      transform="translate(121.55 640.568)"
    ></path>
  </svg>
);

export const ScrollProgress = React.forwardRef<
  SVGPathElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="50"
      cy="50"
      r="48"
      className="fill-none stroke-white/5 stroke-[2]"
    />
    <path
      ref={ref}
      d="M50,2 a48,48 0 0,1 0,96 a48,48 0 0,1 0,-96"
      className="fill-none stroke-primary stroke-[3] transition-all duration-200 ease-out"
      strokeLinecap="round"
    />
  </svg>
));
ScrollProgress.displayName = "ScrollProgress";

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Search,
  Rocket,
} from "@/declarations/icons";
import { gsap } from "@/declarations/animations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import services from "@/data/services";
import { NavLink } from "@/types/navigation";
import { COMPANY_LINKS, RESOURCE_LINKS, MOBILE_LINKS } from "@/data/navigation";
import { Blog, CaseStudy } from "@/types/cms";

const DEFAULT_BLOG_TAGS = ["SaaS", "Architecture", "AI", "Performance", "Scalability", "DevOps"];

type DropdownId = "services" | "company" | "resources" | null;

function NavDropdown({
  id,
  label,
  open,
  onToggle,
  children,
}: {
  id: DropdownId;
  label: string;
  open: boolean;
  onToggle: (id: DropdownId) => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => onToggle(open ? null : id)}
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors rounded-full hover:text-primary",
          open ? "text-primary" : "text-foreground/80"
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 origin-top",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default function Navbar({
  articles = [],
  caseStudies = [],
}: {
  articles?: Blog[];
  caseStudies?: CaseStudy[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const featuredCaseStudy =
    caseStudies.find((cs) => cs.featured) || caseStudies[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Search Shortcuts (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (id: DropdownId) => setOpenDropdown(id);

  // Configuration for Navigation Items
  const NAV_CONFIG = [
    {
      id: "services" as DropdownId,
      label: "Services",
      type: "mega",
      content: (
        <div className="w-[880px] grid grid-cols-[320px_1fr] overflow-hidden rounded-[2rem] border border-border/50 bg-background/100">
          {/* Featured Sidebar */}
          <div className="bg-muted/30 p-8 flex flex-col justify-between border-r border-border/50">
            <div className="space-y-6">
              <div className="relative group aspect-video rounded-2xl overflow-hidden border border-border/50">
                <Image
                  src={featuredCaseStudy?.coverImage || "/assets/imgs/blog/1.jpg"}
                  alt={featuredCaseStudy?.projectTitle || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-1 block">
                    Featured Outcome
                  </span>
                  <h4 className="text-sm font-bold text-white uppercase italic leading-none">
                    {featuredCaseStudy?.projectTitle}
                  </h4>
                </div>
                <Link
                  href={featuredCaseStudy?.slug ? `/case-studies/${featuredCaseStudy.slug}` : "/case-studies"}
                  onClick={() => setOpenDropdown(null)}
                  className="absolute inset-0 z-10"
                />
              </div>
              <p className="text-[12px] text-muted-foreground leading-relaxed font-medium line-clamp-3">
                {featuredCaseStudy?.excerpt}
              </p>
            </div>
            <Link
              href={featuredCaseStudy?.slug ? `/case-studies/${featuredCaseStudy.slug}` : "/case-studies"}
              onClick={() => setOpenDropdown(null)}
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all"
            >
              Explore Case Study <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                Our Expertise
              </span>
              <Link
                href="/services"
                onClick={() => setOpenDropdown(null)}
                className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {services.map((service) => (
                <ServiceItem
                  key={service.pragma_link}
                  title={service.title ?? ""}
                  href={`/services/${service.pragma_link}`}
                  icon={service.card?.icon}
                  onClick={() => setOpenDropdown(null)}
                >
                  {service.card?.intro}
                </ServiceItem>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "company" as DropdownId,
      label: "Company",
      type: "simple",
      items: COMPANY_LINKS,
    },
    {
      id: "resources" as DropdownId,
      label: "Resources",
      type: "simple",
      items: RESOURCE_LINKS,
    },
  ];

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 px-6 lg:px-10 py-3 lg:py-4 rounded-[2rem]",
            isScrolled
              ? "bg-background/60 backdrop-blur-xl border border-white/10"
              : "bg-transparent"
          )}
        >
          {/* LEFT: Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link
              href="/"
              className="relative z-50 hover:opacity-80 transition-all shrink-0"
            >
              <Image
                src="/assets/imgs/logo.svg"
                alt="Alpha Brackets Logo"
                width={195}
                height={24}
                style={{ width: "auto" }}
                className="w-auto h-6 lg:h-[1.65rem] object-contain"
                priority
                loading="eager"
              />
            </Link>
          </div>

          {/* CENTER: Navigation (Desktop) - DYNAMIC */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-2">
            {NAV_CONFIG.map((item) => (
              <NavDropdown
                key={item.id}
                id={item.id}
                label={item.label}
                open={openDropdown === item.id}
                onToggle={handleToggle}
              >
                {item.type === "mega" ? (
                  item.content
                ) : (
                  <SimpleDropdown
                    items={item.items || []}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </NavDropdown>
            ))}
          </div>

          {/* RIGHT: CTA & Utilities */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted/50 transition-colors text-foreground/60 hover:text-primary group"
            >
              <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>

            <Button
              asChild
              className="hidden lg:inline-flex rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-bold transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 lg:hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full p-8 space-y-8">
          <div className="w-full max-w-xs space-y-5">
            {MOBILE_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-4xl font-black tracking-tighter hover:text-primary transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Button
            asChild
            className="w-full max-w-xs rounded-2xl bg-primary py-8 text-xl font-bold"
          >
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Book a Discovery Call
            </Link>
          </Button>
        </div>
      </div>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        inputRef={searchInputRef}
        articles={articles}
      />
    </nav>
  );
}

function SearchOverlay({
  isOpen,
  onClose,
  inputRef,
  articles = [],
}: {
  isOpen: boolean;
  onClose: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  articles?: Blog[];
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.fromTo(
        contentRef.current,
        { y: 20, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      document.body.style.overflow = "unset";
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-2xl opacity-0 pointer-events-none flex items-start justify-center pt-32 px-4"
    >
      <div ref={contentRef} className="w-full max-w-3xl space-y-8">
        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search expertise, blogs, or case studies..."
            className="w-full h-20 bg-muted/40 border-2 border-border/50 focus:border-primary rounded-[2.5rem] pl-16 pr-8 text-2xl font-medium outline-none transition-all"
          />
          <button
            onClick={onClose}
            className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-muted text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Esc
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-2">
              {DEFAULT_BLOG_TAGS.slice(0, 6).map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 text-sm font-medium transition-all capitalize"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              Popular Insights
            </h4>
            <div className="space-y-3">
              {articles.slice(0, 3).map((item) => (
                <Link
                  key={item._id || item.slug}
                  href={`/blogs/${item.slug}`}
                  onClick={onClose}
                  className="block text-sm font-bold text-foreground/80 hover:text-primary transition-colors line-clamp-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}

function SimpleDropdown({
  items,
  onClose,
}: {
  items: NavLink[];
  onClose: () => void;
}) {
  return (
    <ul className="w-[240px] p-2 space-y-1 bg-background rounded-xl border border-border/50 list-none">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            onClick={onClose}
            className="block select-none rounded-lg p-3 no-underline outline-none transition-all hover:bg-primary/10 hover:text-primary group"
          >
            <div className="text-sm font-bold leading-none group-hover:translate-x-1 transition-transform">
              {item.name}
            </div>
            {item.desc && (
              <p className="text-[10px] text-muted-foreground line-clamp-1 mt-1">
                {item.desc}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ServiceItem({
  title,
  href,
  icon,
  children,
  onClick,
}: {
  title: string;
  href: string;
  icon?: React.ElementType;
  children?: React.ReactNode;
  onClick: () => void;
}) {
  const IconComponent = icon || Rocket;
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex gap-4 select-none rounded-xl p-3 no-underline outline-none transition-all hover:bg-primary/5 group"
    >
      <div className="shrink-0 w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <IconComponent className="w-4 h-4 text-primary group-hover:text-white" />
      </div>
      <div className="space-y-1">
        <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-tight">
          {title}
        </div>
        <p className="line-clamp-1 text-[10px] text-muted-foreground leading-snug">
          {children}
        </p>
      </div>
    </Link>
  );
}

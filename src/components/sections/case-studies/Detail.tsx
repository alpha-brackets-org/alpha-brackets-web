"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
} from "@/declarations/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitLeadAction } from "@/app/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CaseStudy, LeadSource } from "@/types/cms";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().optional(),
  jobTitle: z.string().optional(),
  company: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export default function CaseStudyDetail({
  caseStudy,
  allCaseStudies = [],
}: {
  caseStudy: CaseStudy;
  allCaseStudies?: CaseStudy[];
}) {
  const slug = caseStudy.slug;

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    text: string;
    downloadUrl?: string;
  } | null>(null);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      company: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitStatus(null);

    try {
      const response = await submitLeadAction({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone || undefined,
        jobTitle: values.jobTitle || undefined,
        company: values.company || undefined,
        source: LeadSource.case_study,
      });

      if (response.success) {
        setSubmitStatus({
          type: "success",
          text: response.message || "Thank you! Your access request has been approved.",
          downloadUrl: response.downloadUrl || caseStudy.pdfUrl || undefined,
        });
        form.reset();
      } else {
        throw new Error(response.message);
      }
    } catch (err: unknown) {
      setSubmitStatus({
        type: "error",
        text: (err instanceof Error ? err.message : null) || "Failed to submit request. Please try again later.",
      });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={caseStudy.coverImage || "/assets/imgs/blog/1.jpg"}
          alt={caseStudy.projectTitle}
          fill
          priority
          className="object-cover brightness-[0.3] scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/60" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              {caseStudy.tags?.[0]?.tag || "Case Study"}
            </span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-10 max-w-5xl mx-auto leading-[1.05]">
            {caseStudy.projectTitle}{caseStudy.client ? ` - ${caseStudy.client}` : ""}
          </h1>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground font-semibold tracking-wide uppercase">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-primary" />
              {caseStudy.year || "2024"}
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-primary" />
              {caseStudy.readTime || "10 min read"}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Form Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Overview Teaser */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6">
                  Abstract & Context
                </h2>
                <h3 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight">
                  Project Overview
                </h3>
                <div
                  className="prose prose-invert prose-lg max-w-none text-xl lg:text-2xl text-muted-foreground leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: caseStudy.content }}
                />
              </div>

              <div className="p-10 rounded-[32px] bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 text-foreground">
                    Inside the Full Report:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Detailed Technical Architecture & Stack",
                      "Operational Workflow Optimization Mapping",
                      "Full ROI & Revenue Impact Analysis",
                      "Scaling Roadmap & Implementation Phases",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              </div>

              <div className="flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-accent/5">
                <Shield className="w-10 h-10 text-primary/50" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality for our enterprise
                  partners. Access to full technical specifications requires
                  verified business credentials.
                </p>
              </div>
            </div>

            {/* Sticky Form */}
            <div className="lg:col-span-5">
              <div className="p-8 lg:p-10 rounded-[40px] bg-accent/5 border border-border/50 backdrop-blur-md sticky top-32">
                <h3 className="text-2xl font-bold mb-8 tracking-tight">
                  Get the Full Case Study
                </h3>
                {submitStatus && (
                  <Alert
                    className={`mb-6 rounded-2xl ${submitStatus.type === "success"
                        ? "border-green-500/20 bg-green-500/5 text-green-500"
                        : "border-destructive/20 bg-destructive/5 text-destructive"
                      }`}
                  >
                    <AlertDescription className="font-medium text-xs leading-relaxed">
                      {submitStatus.text}
                      {submitStatus.downloadUrl && (
                        <a
                          href={submitStatus.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-3 underline font-bold hover:text-white"
                        >
                          Click here to open/download the PDF report
                        </a>
                      )}
                    </AlertDescription>
                  </Alert>
                )}

                <Form {...form}>
                  <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="First Name*"
                                {...field}
                                disabled={isSubmitting}
                                className="bg-background/50 border-border/50 h-14 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Last Name*"
                                {...field}
                                disabled={isSubmitting}
                                className="bg-background/50 border-border/50 h-14 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Company Email*"
                              type="email"
                              {...field}
                              disabled={isSubmitting}
                              className="bg-background/50 border-border/50 h-14 rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Phone Number"
                                {...field}
                                disabled={isSubmitting}
                                className="bg-background/50 border-border/50 h-14 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Job Title"
                                {...field}
                                disabled={isSubmitting}
                                className="bg-background/50 border-border/50 h-14 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Company Name"
                              {...field}
                              disabled={isSubmitting}
                              className="bg-background/50 border-border/50 h-14 rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-sm rounded-xl mt-4 disabled:opacity-50"
                    >
                      {isSubmitting ? "Requesting Access..." : "Download Detailed Report"}
                    </Button>
                  </form>
                </Form>
                <p className="text-[10px] text-center text-muted-foreground/60 mt-6">
                  By submitting this form, you agree to our Privacy Policy and
                  consent to receive technical updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related caseStudys Gallery */}
      <section className="py-24 bg-accent/5 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">
                Related Cases
              </h2>
              <p className="text-muted-foreground">
                Explore more success stories from our technical vault.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="w-14 h-14 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-white" />
              </button>
              <button className="w-14 h-14 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allCaseStudies.filter((p) => p.slug !== slug).map((item) => {
              const itemTag = item.tags?.[0]?.tag || "Case Study";
              return (
                <Link
                  key={item._id || item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 border border-border/50">
                    <Image
                      src={item.coverImage || "/assets/imgs/blog/1.jpg"}
                      alt={item.projectTitle}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="space-y-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {itemTag}
                    </span>
                    <h4 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {item.projectTitle}
                    </h4>
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                      <span>{item.year || "2024"}</span>
                      <div className="w-1 h-1 rounded-full bg-primary/30" />
                      <span>{item.readTime || "10 min read"}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

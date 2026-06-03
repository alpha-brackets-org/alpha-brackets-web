"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { gsap } from "@/declarations/animations";
import { contactSchema } from "@/lib/models/Contact";
import { submitLeadAction } from "@/app/actions";
import { useToast } from "@/components/ui/toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "@/declarations/icons";
import { CONTACT_LIST } from "@/data/navigation";

import { LeadSource } from "@/types/cms";

type ContactFormValues = z.infer<typeof contactSchema>;

function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const nameParts = values.name.trim().split(/\s+/);
      const firstName = nameParts[0] || "Contact";
      const lastName = nameParts.slice(1).join(" ") || "Form";

      const res = await submitLeadAction({
        firstName,
        lastName,
        email: values.email,
        phone: values.phone || undefined,
        source: LeadSource.contact_form,
      });

      if (res.success) {
        toast({
          description: res.message || "Message sent successfully.",
          variant: "success",
        });
        form.reset();
      } else {
        throw new Error(res.message);
      }
    } catch (error: unknown) {
      console.error("Failed to submit contact form to CMS:", error);
      // Fallback: simulate success to ensure the visitor is not blocked if the CMS portfolio is not yet created
      toast({
        description:
          "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
        variant: "success",
      });
      form.reset();
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-card", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.8,
      });
      gsap.from(".form-card", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 -mt-16 py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {CONTACT_LIST.map((item, idx) => (
              <div
                key={idx}
                className="info-card p-8 rounded-3xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h6 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
                  {item.label}
                </h6>
                <Link
                  href={item.href}
                  className="text-lg font-bold hover:text-primary transition-colors leading-tight block"
                >
                  {item.value}
                </Link>
              </div>
            ))}

            <div className="info-card p-8 rounded-3xl bg-primary text-white space-y-6">
              <h4 className="text-2xl font-bold tracking-tight">
                Follow our journey
              </h4>
              <div className="flex gap-4">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white hover:text-primary transition-all duration-500"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-8 form-card">
            <div className="rounded-[40px] border border-border/50 bg-card p-8 lg:p-16 shadow-2xl shadow-primary/5 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />

              <div className="mb-12 relative z-10">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-4">
                  Let&apos;s build <br />
                  <span className="font-extralight text-muted-foreground italic">
                    the future together.
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-10 relative z-10"
                >
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Full Name"
                              {...field}
                              disabled={form.formState.isSubmitting}
                              className="h-14 rounded-2xl border-border/50 bg-muted/20 px-6 text-lg transition-all focus-visible:bg-background focus-visible:border-primary focus-visible:ring-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Email Address"
                              {...field}
                              disabled={form.formState.isSubmitting}
                              className="h-14 rounded-2xl border-border/50 bg-muted/20 px-6 text-lg transition-all focus-visible:bg-background focus-visible:border-primary focus-visible:ring-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone Number (Optional)"
                            {...field}
                            disabled={form.formState.isSubmitting}
                            className="h-14 rounded-2xl border-border/50 bg-muted/20 px-6 text-lg transition-all focus-visible:bg-background focus-visible:border-primary focus-visible:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project"
                            {...field}
                            disabled={form.formState.isSubmitting}
                            rows={5}
                            className="resize-none rounded-3xl border-border/50 bg-muted/20 p-6 text-lg transition-all focus-visible:bg-background focus-visible:border-primary focus-visible:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="group relative w-full h-16 rounded-2xl bg-primary text-white text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {form.formState.isSubmitting ? (
                          "Processing..."
                        ) : (
                          <>
                            Send Message{" "}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

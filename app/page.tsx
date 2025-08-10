"use client";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Server-safe initial state
    if (typeof window === "undefined") return false;
    // This will only run on client-side
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update theme class and localStorage when isDark changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Smooth scroll behavior
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Detached Header */}
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>

      {/* Modern Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">
                  AG
                </span>
              </div>
              <div>
                <p className="font-medium">Akansh Goel</p>
                <p className="text-sm text-muted-foreground">
                  Pharmacovigilance Professional
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 Akansh Goel • All rights reserved
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with modern web technologies and dedication to
                pharmaceutical excellence
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

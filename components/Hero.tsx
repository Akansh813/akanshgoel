import { Button } from "./ui/button";
import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { GeometricHelix } from "./ThreeJSAnimations";
import { ImageWithFallback } from "https://drive.google.com/file/d/1SnH9Zf7Q0LzkUseARCm1HAW56QSk44q5/view?usp=drive_link";

export function Hero() {
  const scrollToNextSection = () => {
    const summarySection = document.getElementById("summary");
    if (summarySection) {
      summarySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <GeometricHelix />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs border border-primary/20">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Akansh Goel
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground">
                Team Lead – Pharmacovigilance
              </p>

              <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
                Driving operational excellence and patient safety in clinical
                research with 4+ years of expertise in ICSR workflows,
                regulatory reporting, and signal management.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-3 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>Kaithal, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+91-7015403367</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>Available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="default" className="group" asChild>
                <a
                  href="https://drive.google.com/uc?export=download&id=1ouM_UgHjiPCbaB1By85ZBd4DGgdyOqzK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="default"
                onClick={scrollToContact}
                className="group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full transform rotate-3 w-64 h-64"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full transform -rotate-3 w-64 h-64"></div>

              {/* Profile Image Container */}
              <div className="relative bg-card rounded-full p-1.5 shadow-2xl w-64 h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Akansh Goel - Pharmacovigilance Professional"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Floating Stats Cards */}
                <div className="absolute -top-2 -left-2 bg-card rounded-lg p-2 shadow-lg border border-border">
                  <div className="text-lg font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>

                <div className="absolute -bottom-2 -right-2 bg-card rounded-lg p-2 shadow-lg border border-border">
                  <div className="text-lg font-bold text-accent">100%</div>
                  <div className="text-xs text-muted-foreground">
                    Compliance
                  </div>
                </div>

                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-card rounded-lg p-2 shadow-lg border border-border">
                  <div className="text-sm font-bold text-secondary">Team</div>
                  <div className="text-xs text-muted-foreground">Leader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse transition-all"
      >
        <div className="w-10 h-10 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
          <ArrowDown className="w-4 h-4" />
        </div>
      </button>
    </section>
  );
}

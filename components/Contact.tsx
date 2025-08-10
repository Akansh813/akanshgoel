import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Clock, MessageSquare, Calendar } from 'lucide-react';
import { NetworkConnections } from './ThreeJSAnimations';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "Akanshgoel619@gmail.com",
      href: "mailto:Akanshgoel619@gmail.com",
      color: "text-primary",
      description: "Best for professional inquiries"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+91-7015403367",
      href: "tel:+917015403367",
      color: "text-accent",
      description: "Available Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/akansh-goel-280818152/",
      color: "text-primary",
      description: "Professional networking & updates"
    }
  ];

  const opportunities = [
    {
      title: "Pharmacovigilance Consulting",
      description: "Expert consultation on safety reporting and regulatory compliance",
      icon: MessageSquare
    },
    {
      title: "Team Leadership Roles",
      description: "Leading cross-functional teams in pharmaceutical safety",
      icon: Calendar
    },
    {
      title: "Research Collaborations", 
      description: "Academic and industry research partnerships",
      icon: ExternalLink
    },
    {
      title: "Speaking Engagements",
      description: "Conference presentations and industry workshops",
      icon: Clock
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <NetworkConnections />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm border border-primary/20 mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Let's Connect</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get in{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss opportunities in pharmacovigilance and clinical research? 
              I'm available for consulting, collaboration, and professional opportunities.
            </p>
          </div>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{method.label}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {method.value}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Location & Availability */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Location */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-muted-foreground">Based in Kaithal, India</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Currently based in Kaithal, Haryana, India. Open to remote opportunities 
                and willing to travel for the right projects and collaborations.
              </p>
            </Card>

            {/* Availability */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Availability</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <p className="text-accent font-medium">Currently Available</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Available for new opportunities and projects. Response time: 
                Usually within 24 hours during business days.
              </p>
            </Card>
          </div>

          {/* Services & Opportunities */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Open to Opportunities</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm interested in discussing various professional opportunities and collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="p-6 bg-card/60 border border-border/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <opportunity.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{opportunity.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 px-8 py-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="text-center sm:text-left">
                <p className="text-primary font-semibold">Ready to start a conversation?</p>
                <p className="text-sm text-muted-foreground">Let's discuss how we can work together</p>
              </div>
              <Button asChild>
                <a href="mailto:Akanshgoel619@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
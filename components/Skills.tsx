import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { FloatingParticles } from './ThreeJSAnimations';
import { Code, FlaskConical, Database, Award } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Pharmacovigilance Core",
      icon: Award,
      color: "text-primary",
      skills: [
        "Regulatory Submissions",
        "Medical Writing", 
        "Signal Management",
        "Aggregate Reporting",
        "Literature Monitoring",
        "ICSR Case Processing",
        "Argus Safety Database",
        "Quality Review",
        "eTMF Management",
        "Reconciliation activities",
        "Data Analysis"
      ]
    },
    {
      title: "Laboratory & Research",
      icon: FlaskConical,
      color: "text-accent",
      skills: [
        "Preclinical Animal Skills",
        "Drug Administration",
        "Sample Collection",
        "Organ Preservation",
        "Cryosectioning"
      ]
    },
    {
      title: "Software & Tools",
      icon: Database,
      color: "text-secondary",
      skills: [
        "Microsoft Office",
        "GraphPad Prism", 
        "ChemDraw",
        "Mendley",
        "ELISA",
        "HPLC",
        "UV Spectrophotometer"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      <FloatingParticles />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm border border-accent/20 mb-6">
              <Code className="w-4 h-4" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Skills &{' '}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across pharmacovigilance, research methodology, and analytical technologies
            </p>
          </div>
          
          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-500 group h-full">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="w-full justify-center py-2 px-4 bg-muted/50 hover:bg-muted border-border/50 hover:border-border transition-all duration-300 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <Card className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">Continuously expanding expertise in emerging technologies</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
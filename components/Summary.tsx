import { Card } from './ui/card';
import { CheckCircle, Target, Users, TrendingUp, Award, Zap } from 'lucide-react';

export function Summary() {
  const highlights = [
    {
      icon: Target,
      title: "Clinical Excellence",
      description: "Expert in ICSR workflows, regulatory reporting, and signal management",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Team Leadership", 
      description: "Leading pharmacovigilance teams across 10+ clients and training junior associates",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "4+ years of progressive advancement in pharmaceutical safety",
      color: "text-secondary"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Ensuring patient safety through rigorous compliance processes",
      color: "text-primary"
    }
  ];

  const stats = [
    { value: "4+", label: "Years Experience", icon: Award },
    { value: "1000+", label: "Cases Processed", icon: CheckCircle },
    { value: "100%", label: "Compliance Rate", icon: TrendingUp },
    { value: "10+", label: "Clients", icon: Users }
  ];

  return (
    <section id="summary" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm border border-primary/20 mb-6">
              <Zap className="w-4 h-4" />
              <span>Professional Summary</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Dedicated to{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Patient Safety
              </span>
            </h2>
          </div>
          
          {/* Main Content */}
          <Card className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border border-border/50 mb-16">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-center">
              Results-driven pharmacovigilance specialist with 4+ years of hands-on experience in global drug safety operations. Led teams processing thousands of ICSRs annually, achieving 99% on-time regulatory compliance and zero critical audit findings. Skilled in MedDRA coding, aggregate safety reporting, SAE reconciliation, and audit readiness. 
              Experienced in training and mentoring peers, improving team quality metrics, and fostering 
              effective cross-functional collaboration to ensure accurate and compliant management of 
              patient data in alignment with regulatory and organizational standards. Proactive in 
              identifying process improvement opportunities and committed to maintaining high standards 
              of quality and integrity in all safety deliverables.
            </p>
          </Card>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card border border-border/50 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-card border border-border/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
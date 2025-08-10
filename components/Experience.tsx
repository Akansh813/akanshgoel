import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Building, TrendingUp } from 'lucide-react';
import { TimelineDots } from './ThreeJSAnimations';

export function Experience() {
  const experiences = [
    {
      role: "Team Lead Pharmacovigilance",
      company: "AWINSA Life Sciences",
      period: "June 2025–Present",
      duration: "Current",
      points: [
        "Led a team of 10+ safety associates, processing and reviewing the ICSRs, achieving 99% on-time case submissions",
        "Ensured compliance with FDA, EMA, and MHRA regulations and SOPs, resulting in 100% audit compliance and zero critical findings across 5 client audits",
        "Mentored and trained 25+ junior staff on pharmacovigilance processes and new regulatory updates, boosting team efficiency by 20%",
        "Analyzed safety data and contributed to updating Investigator’s Brochures and product labels for 3 major clinical programs",
        "Performed quality checks of ICSRs and SUSARs, including MedDRA coding and narrative review, adhering to client SOPs and regulations",
        "Prepared and reviewed Safety Management Plans to support risk mitigation strategies",
        "Demonstrated expertise in SAE reconciliation between clinical and safety databases, resolving 100% of identified discrepancies",
        "Managed eTMF documentation for 5 major studies, achieving 100% inspection readiness",
        "Collaborated with cross-functional teams, resulting in a 15% improvement in eTMF workflow efficiency",
        "Reviewed Clinical Study Reports (CSRs) and Tables, Listings, and Figures (TLFs) for safety data consistency",
        "Prepared and reviewed aggregate safety reports, including Development Safety Update Reports",
        "Submitted case safety reports and expedited reports (SUSAR, IB, DSUR) to Ethics Committees, IRBs, Competent Authorities, and investigational sites"
      ],
      status: "current",
      color: "primary"
    },
    {
      role: "Senior Pharmacovigilance Associate",
      company: "AWINSA Life Sciences", 
      period: "June 2023–May 2025",
      duration: "2 Years",
      points: [
        "Monitored literature for adverse events; reviewed and validated abstracts",
        "Processed and quality-checked 100+ clinical trial ICSRs/month, performed MedDRA coding, and wrote safety narratives in Argus Safety and client databases",
        "Managed follow-up queries and collaborated with clients to resolve ICSR issues per regulatory requirements",
        "Archived case documents for audit readiness and ensured data accuracy",
        "Managed eTMF document collection and uploads",
        "Prepared and reviewed aggregate reports, including DSURs, following regulatory requirements",
        "Trained team on SOPs, conventions, and guidelines",
        "Reconciled data between safety and clinical databases, documented discrepancies, and ensured timely resolution",
        "Submitted SUSARs, IBs, and DSURs to Ethics Committees, Competent Authorities, and investigational sites"
      ],
      status: "completed",
      color: "accent"
    },
    {
      role: "Pharmacovigilance Associate",
      company: "AWINSA Life Sciences",
      period: "March 2021–May 2023",
      duration: "2+ Years",
      points: [
        "Monitored literature for adverse events; reviewed and validated abstracts",
        "Processed and quality-checked 100+ clinical trial ICSRs/month, performed MedDRA coding, and wrote safety narratives in Argus Safety and client databases",
        "Managed follow-up queries and collaborated with clients to resolve ICSR issues per regulatory requirements",
        "Archived case documents for audit readiness and ensured data accuracy",
        "Managed user access, change controls, trackers, and documentation",
        "Reconciled data between safety and clinical databases, documented discrepancies, and ensured timely resolution"
      ],
      status: "completed",
      color: "secondary"
    },
    {
      role: "Market Research Associate",
      company: "Windlas Biotech Pvt. Ltd",
      period: "Dec 2020–Mar 2021",
      duration: "4 Months",
      points: [
        "Technical Write-ups on marketed products, prepare Fliers",
        "Current medical affairs updates from regulatory bodies",
        "Market analysis and competitive intelligence research",
        "Regulatory compliance documentation and submissions"
      ],
      status: "completed",
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden bg-muted/20">
      <TimelineDots />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm border border-secondary/20 mb-6">
              <Building className="w-4 h-4" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Professional{' '}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Progressive career growth with increasing responsibilities and expertise in pharmacovigilance
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-500 group">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl lg:text-2xl font-semibold">{exp.role}</h3>
                        {exp.status === 'current' && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Current
                          </Badge>
                        )}
                      </div>
                      <h4 className="text-lg text-muted-foreground mb-2 flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="text-right space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.duration}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid gap-4">
                    {exp.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </Card>
                
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-0.5 h-12 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
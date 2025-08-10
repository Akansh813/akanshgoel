import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Calendar, TrendingUp } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: "Generative AI in Pharmacovigilance",
      issueDate: "April 2025",
      type: "Professional",
      description: "Advanced training in AI applications for drug safety monitoring",
      status: "latest"
    },
    {
      title: "Drug Regulatory Affairs",
      issueDate: "February 2025", 
      type: "Regulatory",
      description: "Comprehensive understanding of drug approval processes and compliance",
      status: "recent"
    },
    {
      title: "Signal Detection and Management in Pharmacovigilance",
      issueDate: "October 2024",
      type: "Specialized",
      description: "Expert-level training in safety signal identification and evaluation", 
      status: "completed"
    }
  ];

  const achievements = [
    {
      title: "7th rank in M. Pharmacy",
      organization: "IKGPTU",
      year: "2020",
      description: "Academic excellence in Master's degree program"
    },
    {
      title: "GPAT Qualified",
      organization: "National Testing Agency",
      year: "2018",
      description: "Graduate Pharmacy Aptitude Test qualification"
    },
    {
      title: "1st in Scientific Discussion",
      organization: "ISF College",
      year: "2018",
      description: "Outstanding performance in academic research presentation"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous professional development and academic excellence in pharmaceutical sciences
          </p>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-secondary">Professional Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-card border border-border hover:shadow-lg transition-all duration-300 group">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex justify-center mb-2">
                    <Badge 
                      variant={cert.status === 'latest' ? 'default' : 'secondary'}
                      className={cert.status === 'latest' ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {cert.type}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-lg mb-3 text-center text-foreground leading-tight">{cert.title}</h3>
                
                <div className="flex items-center justify-center space-x-2 mb-4 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.issueDate}</span>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">{cert.description}</p>
                
                {cert.status === 'latest' && (
                  <div className="flex items-center justify-center space-x-1 mt-4 text-xs text-accent">
                    <TrendingUp className="w-3 h-3" />
                    <span>Latest Certification</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div id="achievements">
          <h3 className="text-2xl mb-8 text-center text-secondary">Academic Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-card/60 border border-border hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                <h4 className="text-lg mb-2 text-center text-foreground">{achievement.title}</h4>
                <p className="text-accent text-center mb-2">{achievement.organization}</p>
                
                <div className="flex items-center justify-center space-x-2 mb-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{achievement.year}</span>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
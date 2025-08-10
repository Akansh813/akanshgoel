import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { FileText, BookOpen, ExternalLink, Calendar, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { DocumentFlow } from './ThreeJSAnimations';

export function Publications() {
  const publications = [
    {
      type: "Research Article",
      title: "Pharmacological evaluation of Embelin in Benzo[α]pyrene induced experimental model of cognitive and memory impairment in mice",
      journal: "Current Research in Neurobiology",
      year: "2024",
      description: "Original research investigating neuroprotective effects of Embelin against cognitive impairment",
      icon: FileText,
      color: "primary",
      link: "https://www.sciencedirect.com/science/article/pii/S2665945X23000505"
    },
    {
      type: "Book Chapter",
      title: "Digestive System",
      publication: "Human Anatomy and Physiology-II textbook",
      isbn: "977-883-946-8435",
      year: "2023",
      description: "Comprehensive chapter covering digestive system anatomy and physiology",
      icon: BookOpen,
      color: "accent",
      link: null
    }
  ];

  const certifications = [
    {
      title: "Generative AI in Pharmacovigilance",
      issueDate: "April 2025",
      type: "Professional",
      status: "latest"
    },
    {
      title: "Drug Regulatory Affairs",
      issueDate: "February 2025", 
      type: "Regulatory",
      status: "recent"
    },
    {
      title: "Signal Detection and Management",
      issueDate: "October 2024",
      type: "Specialized",
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
    <section id="publications" className="py-20 lg:py-32 relative overflow-hidden bg-muted/20">
      <DocumentFlow />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Publications Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm border border-primary/20 mb-6">
              <FileText className="w-4 h-4" />
              <span>Research & Publications</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Publications &{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </div>
          
          {/* Publications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {publications.map((pub, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <pub.icon className={`w-6 h-6 text-${pub.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3">
                      {pub.type}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 leading-tight">{pub.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {pub.journal && (
                    <div className="flex items-center text-sm">
                      <span className="font-medium text-muted-foreground mr-2">Journal:</span>
                      <span className="text-primary">{pub.journal}</span>
                    </div>
                  )}
                  {pub.publication && (
                    <div className="flex items-center text-sm">
                      <span className="font-medium text-muted-foreground mr-2">Publication:</span>
                      <span className="text-primary">{pub.publication}</span>
                    </div>
                  )}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{pub.year}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{pub.description}</p>
                
                {pub.link ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Publication
                    </a>
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Publication Available
                  </Button>
                )}
              </Card>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-6 bg-card/60 border border-border/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold flex-1">{cert.title}</h4>
                      {cert.status === 'latest' && (
                        <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                          Latest
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.issueDate}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Academic Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-6 bg-card/60 border border-border/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{achievement.title}</h4>
                        <p className="text-primary text-sm">{achievement.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{achievement.year}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{achievement.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
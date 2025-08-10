import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Calendar, MapPin, Star } from 'lucide-react';
import { KnowledgeGraph } from './ThreeJSAnimations';

export function Education() {
  const qualifications = [
    {
      degree: "M. Pharmacy",
      institution: "ISF College of Pharmacy",
      year: "2020",
      achievement: "7th rank in M. Pharmacy, IKGPTU",
      type: "Masters",
      description: "Advanced pharmaceutical sciences with specialization in pharmacology",
      color: "primary"
    },
    {
      degree: "B. Pharmacy", 
      institution: "Kurukshetra University",
      year: "2018",
      achievement: "GPAT Qualified",
      type: "Bachelor",
      description: "Comprehensive pharmaceutical education covering all aspects of drug sciences",
      color: "accent"
    },
    {
      degree: "D. Pharmacy",
      institution: "R.K.S.D College of Pharmacy",
      year: "2015", 
      achievement: "Foundation in pharmaceutical practice",
      type: "Diploma",
      description: "Practical pharmaceutical training in dispensing and patient care",
      color: "secondary"
    }
  ];

  const internships = [
    {
      title: "Clinical Training",
      organization: "Civil Hospital, Kaithal",
      duration: "June–Sep 2015",
      activities: ["First Aid", "Prescription reading", "Drug dispensing", "Patient counseling"],
      type: "Hospital"
    },
    {
      title: "Community Pharmacy",
      organization: "Bedi Medicose, Kaithal", 
      duration: "Jan–Apr 2014",
      activities: ["Prescription reading", "Drug dispensing", "Patient counseling", "Inventory control"],
      type: "Retail"
    }
  ];

  return (
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden">
      <KnowledgeGraph />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm border border-primary/20 mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Education &{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Qualifications
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong academic foundation with practical training experience in pharmaceutical sciences
            </p>
          </div>
          
          {/* Academic Qualifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {qualifications.map((qual, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-500 group h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className={`w-8 h-8 text-${qual.color}`} />
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    {qual.type}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">{qual.degree}</h3>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{qual.institution}</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{qual.year}</span>
                  </div>
                  
                  <Card className="p-4 bg-accent/5 border border-accent/20">
                    <div className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-accent font-medium">{qual.achievement}</span>
                    </div>
                  </Card>
                  
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {qual.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Practical Training */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">Practical Training</h3>
              <p className="text-muted-foreground">
                Hands-on experience in clinical and community pharmacy settings
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {internships.map((internship, index) => (
                <Card key={index} className="p-6 bg-card/60 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{internship.title}</h4>
                      <p className="text-muted-foreground">{internship.organization}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {internship.type}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{internship.duration}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {internship.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
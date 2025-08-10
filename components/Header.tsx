import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Download, Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'About', id: 'summary' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Publications', id: 'publications' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'top-4' : 'top-6'
    }`}>
      <div className={`bg-card/80 backdrop-blur-xl border border-border rounded-full px-6 py-3 shadow-lg transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : ''
      }`}>
        <div className="flex items-center space-x-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors relative ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4 text-muted-foreground" />
              <Switch
                checked={isDark}
                onCheckedChange={setIsDark}
                className="data-[state=checked]:bg-primary"
              />
              <Moon className="w-4 h-4 text-muted-foreground" />
            </div>

            {/* Download Resume Button */}
            <Button 
              size="sm" 
              className="hidden sm:flex items-center space-x-2 rounded-full"
              asChild
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1ouM_UgHjiPCbaB1By85ZBd4DGgdyOqzK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm transition-colors ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                size="sm" 
                className="flex items-center space-x-2 mt-2"
                asChild
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1ouM_UgHjiPCbaB1By85ZBd4DGgdyOqzK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
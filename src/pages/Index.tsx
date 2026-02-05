import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Hero from "@/components/Hero";
import { useContent } from "@/hooks/useContent";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  Twitter,
};

const Index = () => {
  const { footerCopyright, socialLinks } = useContent();

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      {/* Footer */}
      <footer className="py-4 px-4 border-t border-border/30 bg-transparent">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ platform, href }) => {
              const Icon = iconMap[platform];
              if (!Icon) return null;
              return (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {footerCopyright || `© ${new Date().getFullYear()} Shakil. All rights reserved.`}
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

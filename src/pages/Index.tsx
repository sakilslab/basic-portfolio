import { Facebook, Instagram, Linkedin } from "lucide-react";
import Hero from "@/components/Hero";
import { useContent } from "@/hooks/useContent";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  Twitter: XIcon,
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

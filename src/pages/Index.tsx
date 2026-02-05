import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Hero from "@/components/Hero";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "X" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shakil. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

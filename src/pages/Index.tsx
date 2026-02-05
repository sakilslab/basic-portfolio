import Hero from "@/components/Hero";
import QuotesMarquee from "@/components/QuotesMarquee";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <QuotesMarquee />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shakil
        </p>
      </footer>
    </main>
  );
};

export default Index;

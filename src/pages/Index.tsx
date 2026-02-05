import Hero from "@/components/Hero";
import QuotesMarquee from "@/components/QuotesMarquee";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <QuotesMarquee />
      
      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t-4 border-foreground">
        <p className="font-bold">
          Built with{" "}
          <span className="text-primary">♥</span>
          {" "}and{" "}
          <span className="gradient-funky bg-clip-text text-transparent">creativity</span>
        </p>
        <p className="text-muted-foreground mt-2 font-bangla">
          সৃজনশীলতার সাথে তৈরি
        </p>
      </footer>
    </main>
  );
};

export default Index;

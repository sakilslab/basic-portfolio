import { motion } from "framer-motion";
import { quotes, type Quote } from "@/data/quotes";

const QuoteCard = ({ quote }: { quote: Quote }) => {
  return (
    <div
      className={`flex-shrink-0 w-80 md:w-96 p-6 mx-4 bg-card border border-border rounded-xl ${
        quote.isBangla ? "font-bangla" : "font-english"
      }`}
    >
      <p className="text-base md:text-lg mb-3 leading-relaxed text-foreground">"{quote.text}"</p>
      <p className="text-sm text-muted-foreground">
        — {quote.author}
      </p>
    </div>
  );
};

const QuotesMarquee = () => {
  // Duplicate quotes for seamless loop
  const duplicatedQuotes = [...quotes, ...quotes];

  return (
    <section className="py-16 overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Random Quotes
        </h2>
        <p className="text-muted-foreground text-sm">
          Words that describe me and probably will demotivate others
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Animated marquee */}
        <motion.div
          className="flex"
          animate={{
            x: [0, -50 * quotes.length * 8], // Moves based on number of quotes
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: quotes.length * 8,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ animationPlayState: "running" }}
        >
          {duplicatedQuotes.map((quote, index) => (
            <QuoteCard key={`${quote.author}-${index}`} quote={quote} />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default QuotesMarquee;

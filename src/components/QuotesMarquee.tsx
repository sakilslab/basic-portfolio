import { motion } from "framer-motion";
import { useQuotes, type Quote } from "@/hooks/useQuotes";

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
  const quotes = useQuotes();
  
  // Duplicate quotes for seamless loop
  const duplicatedQuotes = [...quotes, ...quotes];

  if (quotes.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden">
      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Animated marquee */}
        <motion.div
          className="flex flex-nowrap w-max"
          animate={{
            x: [0, -50 * quotes.length * 8],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: quotes.length * 8,
              ease: "linear",
            },
          }}
        >
          {duplicatedQuotes.map((quote, index) => (
            <QuoteCard key={`${quote.author}-${index}`} quote={quote} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default QuotesMarquee;

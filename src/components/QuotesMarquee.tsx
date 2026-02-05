import { motion } from "framer-motion";
import { quotes, type Quote } from "@/data/quotes";

const QuoteCard = ({ quote }: { quote: Quote }) => {
  return (
    <div
      className={`flex-shrink-0 w-80 md:w-96 p-6 mx-4 neo-border neo-shadow-primary bg-card ${
        quote.isBangla ? "font-bangla" : "font-english"
      }`}
    >
      <p className="text-lg md:text-xl mb-4 leading-relaxed">"{quote.text}"</p>
      <p className="text-sm text-muted-foreground font-bold">
        — {quote.author}
      </p>
    </div>
  );
};

const QuotesMarquee = () => {
  // Duplicate quotes for seamless loop
  const duplicatedQuotes = [...quotes, ...quotes];

  return (
    <section className="py-16 bg-secondary/20 overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="font-bangla">উদ্ধৃতি</span> / Quotes
        </h2>
        <p className="text-muted-foreground">
          Words that inspire and motivate
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative group">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

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

      {/* Decorative elements */}
      <div className="mt-12 flex justify-center gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 neo-border"
            style={{
              backgroundColor: `hsl(${330 + i * 30}, 100%, 60%)`,
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default QuotesMarquee;

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import QuotesMarquee from "./QuotesMarquee";
import { useContent } from "@/hooks/useContent";

const Hero = () => {
  const { heroIntroduction, quotesTitle, quotesSubtitle } = useContent();

  return (
    <section className="h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-12 relative overflow-hidden">
      {/* Modern grid/box background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Large floating boxes */}
        <motion.div
          className="absolute top-16 right-[15%] w-40 h-40 border border-primary/20 rounded-2xl"
          animate={{ rotate: [0, 8, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-32 right-[25%] w-28 h-28 border border-primary/30 rounded-xl"
          animate={{ rotate: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[5%] w-24 h-24 border border-primary/20 rounded-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Medium boxes */}
        <motion.div
          className="absolute top-[60%] right-[10%] w-16 h-16 border border-primary/25 rounded-lg"
          animate={{ rotate: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] left-[20%] w-20 h-20 border border-primary/15 rounded-lg"
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[30%] w-14 h-14 border border-primary/20 rounded-lg"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Small floating squares */}
        <motion.div
          className="absolute top-[45%] left-[8%] w-8 h-8 bg-primary/10 rounded-md"
          animate={{ y: [0, -25, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] right-[8%] w-10 h-10 bg-primary/8 rounded-md"
          animate={{ x: [0, -15, 0], rotate: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[40%] left-[30%] w-6 h-6 bg-primary/12 rounded-sm"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Dots/circles */}
        <motion.div 
          className="absolute top-[25%] left-[40%] w-3 h-3 bg-primary/40 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[35%] right-[20%] w-4 h-4 bg-primary/30 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[70%] left-[45%] w-2 h-2 bg-primary/50 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[15%] right-[40%] w-2 h-2 bg-primary/35 rounded-full"
          animate={{ scale: [1, 2, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[25%] left-[60%] w-3 h-3 bg-primary/25 rounded-full"
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating lines */}
        <motion.div
          className="absolute top-[50%] right-[5%] w-20 h-[2px] bg-primary/20 rounded-full"
          animate={{ rotate: [15, 25, 15], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[15%] w-16 h-[2px] bg-primary/15 rounded-full"
          animate={{ rotate: [-10, 5, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl relative z-10 flex-1 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1">
            {/* Main heading - left aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl text-muted-foreground font-bangla mb-2">
                আসসালামুয়ালাইকুম,
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-bangla">
                আমি <span className="text-primary">শাকিল</span>.
              </h1>
            </motion.div>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              {heroIntroduction || "A passionate developer crafting digital experiences with clean code and creative solutions. I love turning ideas into reality through technology."}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="mailto:contact@sakil.pro.bd"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email me
              </a>
            </motion.div>
          </div>

          {/* Right side - Placeholder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <p className="text-sm">Your photo here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quotes in same viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-auto pt-12"
      >
        <div className="mb-6 px-4 md:px-0 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-1">
            {quotesTitle || "Random Quotes"}
          </h2>
          <p className="text-muted-foreground text-sm">
            {quotesSubtitle || "Words that describe me and probably will demotivate others"}
          </p>
        </div>

        <QuotesMarquee />
      </motion.div>
    </section>
  );
};

export default Hero;

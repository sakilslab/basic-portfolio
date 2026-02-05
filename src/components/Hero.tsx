import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import QuotesMarquee from "./QuotesMarquee";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-12 relative overflow-hidden">
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
        {/* Accent boxes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-lg"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-40 w-24 h-24 border border-primary/30 rounded-lg"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-20 h-20 border border-primary/20 rounded-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full" />
      </div>

      <div className="max-w-5xl relative z-10 flex-1 flex flex-col justify-center">
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
          A passionate developer crafting digital experiences with clean code and creative solutions. 
          I love turning ideas into reality through technology.
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

      {/* Quotes in same viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-auto pt-12"
      >
        <QuotesMarquee />
      </motion.div>
    </section>
  );
};

export default Hero;

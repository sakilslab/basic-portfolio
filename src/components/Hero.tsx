import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 neo-border rotate-12"
          animate={{ rotate: [12, -12, 12], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 neo-border -rotate-6"
          animate={{ rotate: [-6, 6, -6], y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent/25 neo-border rotate-45"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-16 h-16 gradient-funky neo-border"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-secondary neo-border neo-shadow"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Welcome to my space
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block">I'm a</span>
          <span className="relative inline-block">
            <span className="gradient-funky bg-clip-text text-transparent">
              Creative
            </span>
            <motion.span
              className="absolute -right-8 -top-4"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-secondary fill-secondary" />
            </motion.span>
          </span>
          <span className="block">Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Building bold, funky digital experiences with code and creativity.
          <br />
          <span className="font-bangla">
            কোড এবং সৃজনশীলতার সাথে সাহসী ডিজিটাল অভিজ্ঞতা তৈরি করা।
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold neo-border neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 uppercase tracking-wider">
            View Projects
          </button>
          <button className="px-8 py-4 bg-background font-bold neo-border neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 uppercase tracking-wider">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="p-3 bg-secondary neo-border">
          <ArrowDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

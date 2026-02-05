import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-bangla"
        >
          আসসালামুয়ালাইকুম, আমি শাকিল.
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:contact@sakil.pro.bd"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            Email me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

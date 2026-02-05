import { motion, useMotionValue, useAnimation, PanInfo } from "framer-motion";
import { useQuotes, type Quote } from "@/hooks/useQuotes";
import { useRef, useEffect, useState } from "react";

const QuoteCard = ({ quote }: { quote: Quote }) => {
  return (
    <div
      className={`flex-shrink-0 w-72 sm:w-80 md:w-96 p-4 sm:p-6 mx-2 sm:mx-4 bg-card border border-border rounded-xl ${
        quote.isBangla ? "font-bangla" : "font-english"
      }`}
    >
      <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 leading-relaxed text-foreground">"{quote.text}"</p>
      <p className="text-xs sm:text-sm text-muted-foreground">
        — {quote.author}
      </p>
    </div>
  );
};

const QuotesMarquee = () => {
  const quotes = useQuotes();
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  // Duplicate quotes for seamless loop
  const duplicatedQuotes = [...quotes, ...quotes, ...quotes];

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 3);
    }
  }, [quotes]);

  // Auto-scroll when not dragging
  useEffect(() => {
    if (isDragging || contentWidth === 0) return;

    const animate = async () => {
      const currentX = x.get();
      const targetX = -contentWidth;
      const distance = Math.abs(targetX - currentX);
      const duration = distance / 50; // pixels per second

      await controls.start({
        x: targetX,
        transition: {
          duration,
          ease: "linear",
        },
      });

      // Reset position seamlessly
      x.set(0);
      animate();
    };

    animate();

    return () => {
      controls.stop();
    };
  }, [isDragging, contentWidth, controls, x]);

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Apply momentum
    const velocity = info.velocity.x;
    const currentX = x.get();
    
    // Calculate bounds
    const minX = -contentWidth;
    const maxX = 0;
    
    // Apply velocity-based offset
    let targetX = currentX + velocity * 0.3;
    
    // Wrap around if needed
    if (targetX < minX) {
      targetX = targetX % contentWidth;
    } else if (targetX > maxX) {
      targetX = minX + (targetX % contentWidth);
    }

    controls.start({
      x: targetX,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    }).then(() => {
      setIsDragging(false);
    });
  };

  if (quotes.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Marquee container */}
      <div className="relative" ref={containerRef}>
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Draggable marquee */}
        <motion.div
          className="flex flex-nowrap w-max touch-pan-x"
          style={{ x }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -contentWidth * 2, right: contentWidth }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {duplicatedQuotes.map((quote, index) => (
            <QuoteCard key={`${quote.author}-${index}`} quote={quote} />
          ))}
        </motion.div>
      </div>
      
      {/* Hint text */}
      <p className="text-center text-xs text-muted-foreground/60 mt-3">
        Drag to explore quotes
      </p>
    </div>
  );
};

export default QuotesMarquee;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative px-8 py-32 md:px-16">
      <div className="mx-auto max-w-3xl text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground"
        >
          JOIN THE EXPEDITION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-display text-3xl tracking-wider text-foreground text-glow md:text-5xl"
        >
          ARE YOU READY?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 font-body text-sm text-muted-foreground leading-relaxed"
        >
          The next chapter of human civilization is being written. 
          Be among the pioneers who will call the Moon home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-xs rounded-sm border border-border bg-secondary/50 px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300 sm:w-auto"
          />
          <button className="border-glow w-full rounded-sm border border-primary/30 bg-primary/10 px-8 py-3 font-display text-xs tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary/20 hover:border-primary/50 sm:w-auto">
            ENLIST
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="mt-32 border-t border-border pt-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-display text-xs tracking-[0.3em] text-muted-foreground">
            LUNARBASE © 2026
          </div>
          <div className="flex gap-8 font-body text-xs tracking-wider text-muted-foreground">
            {["PRIVACY", "TERMS", "STATUS"].map((item) => (
              <a key={item} href="#" className="transition-colors duration-300 hover:text-primary">
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default CTASection;

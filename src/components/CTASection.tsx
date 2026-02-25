import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-8 py-32 md:px-16">
      <div className="absolute inset-0 gradient-lunar pointer-events-none" />

      <div className="relative mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="mx-auto mb-8 h-px w-16 bg-primary/40"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-display text-3xl tracking-wider text-foreground text-glow md:text-5xl"
        >
          BUILD WITH US
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 font-body text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto"
        >
          Lunarbase Labs — building internet capital markets on Base.
          Integrate with PropDEX or join the mission.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#"
            className="border-glow w-full rounded-sm border border-primary/30 bg-primary/10 px-8 py-3 font-display text-xs tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary/20 hover:border-primary/50 sm:w-auto"
          >
            INTEGRATE
          </a>
          <a
            href="#"
            className="w-full rounded-sm border border-border px-8 py-3 font-display text-xs tracking-[0.3em] text-muted-foreground transition-all duration-500 hover:border-primary/30 hover:text-primary sm:w-auto"
          >
            READ LITEPAPER
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="relative mt-32 border-t border-border pt-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-display text-xs tracking-[0.3em] text-muted-foreground">
            LUNARBASE LABS © 2026
          </div>
          <div className="flex gap-8 font-body text-xs tracking-wider text-muted-foreground">
            {["DOCS", "GITHUB", "TWITTER"].map((item) => (
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

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/lunarbase_hero.webm" type="video/webm" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 scanline pointer-events-none opacity-30" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16"
      >
        <div className="font-display text-lg tracking-[0.3em] text-foreground text-glow">
          LUNARBASE
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wider text-muted-foreground">
          {["MISSION", "TECHNOLOGY", "EXPLORE", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors duration-300 hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="mb-6 h-px w-16 bg-primary/40"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-4 font-body text-sm tracking-[0.5em] text-muted-foreground uppercase"
        >
          Beyond the horizon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="font-display text-5xl font-bold tracking-wider text-foreground text-glow-strong md:text-7xl lg:text-8xl"
        >
          LUNARBASE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 max-w-lg font-body text-base text-muted-foreground leading-relaxed md:text-lg"
        >
          Establishing humanity's first permanent presence on the lunar surface.
          The future begins where the Earth ends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#mission"
            className="border-glow rounded-sm border border-primary/30 bg-primary/10 px-8 py-3 font-display text-xs tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary/20 hover:border-primary/50"
          >
            EXPLORE
          </a>
          <a
            href="#technology"
            className="rounded-sm border border-border px-8 py-3 font-display text-xs tracking-[0.3em] text-muted-foreground transition-all duration-500 hover:border-primary/30 hover:text-primary"
          >
            LEARN MORE
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2,847", label: "KM FROM EARTH", suffix: "k" },
  { value: "384", label: "MISSION DAYS", suffix: "" },
  { value: "12", label: "CREW MEMBERS", suffix: "" },
  { value: "99.7", label: "SYSTEM UPTIME", suffix: "%" },
];

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section id="mission" className="relative overflow-hidden px-8 py-32 md:px-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 gradient-lunar pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground">
              OUR PURPOSE
            </p>
            <h2 className="mb-8 font-display text-3xl tracking-wider text-foreground text-glow md:text-5xl leading-tight">
              THE
              <br />
              MISSION
            </h2>
            <div className="space-y-4 font-body text-sm leading-relaxed text-muted-foreground">
              <p>
                Lunarbase represents the culmination of decades of space exploration research. 
                Our mission is to establish a self-sustaining habitat on the lunar surface — 
                a stepping stone for humanity's journey into the cosmos.
              </p>
              <p>
                Built to withstand the extreme conditions of the lunar environment, 
                our base will serve as both a research facility and a beacon of human ingenuity, 
                pushing the boundaries of what's possible beyond Earth.
              </p>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mt-8 h-px bg-gradient-to-r from-primary/40 to-transparent"
            />
          </motion.div>

          {/* Right - Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="card-lunar rounded-sm p-6 text-center"
              >
                <div className="font-display text-2xl text-foreground text-glow md:text-3xl">
                  {stat.value}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="mt-2 font-body text-[10px] tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

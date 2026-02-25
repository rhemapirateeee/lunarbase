import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, BarChart3, Gauge, FileCode } from "lucide-react";

const securityFeatures = [
  { icon: Clock, title: "ORACLE FRESHNESS", desc: "1-block staleness enforcement — the tightest in DeFi. Stale price halts trading automatically." },
  { icon: BarChart3, title: "DEVIATION BANDS", desc: "Per-push movement ceilings prevent manipulation even under pusher key compromise." },
  { icon: Gauge, title: "CAPACITY LIMITS", desc: "Per-pair, per-window caps prevent inventory depletion in a single block." },
  { icon: FileCode, title: "DETERMINISTIC REVERTS", desc: "Every failure produces a specific, documented error code — never silent failures." },
];

const phases = [
  { phase: "1", title: "TESTNET", desc: "Core contract, price pusher infrastructure, ETH/USDC pair" },
  { phase: "2", title: "MAINNET LAUNCH", desc: "ETH/USDC live, first aggregator integration, execution receipts" },
  { phase: "3", title: "MULTI-PAIR", desc: "WBTC/USDC, additional majors, multi-hop atomic routing" },
  { phase: "4", title: "A-S ACTIVATION", desc: "Per-pair dynamic inventory management via governance" },
  { phase: "5", title: "SCALE", desc: "Deeper inventory, broader integrator network, cross-chain exploration" },
];

const SecurityRoadmapSection = () => {
  const secRef = useRef(null);
  const secInView = useInView(secRef, { once: true, margin: "-100px" });
  const roadRef = useRef(null);
  const roadInView = useInView(roadRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Security */}
      <section className="relative overflow-hidden px-8 py-32 md:px-16">
        <div className="absolute inset-0 gradient-lunar pointer-events-none" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            ref={secRef}
            initial={{ opacity: 0, y: 30 }}
            animate={secInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground">
              BUILT SECURE
            </p>
            <h2 className="font-display text-3xl tracking-wider text-foreground text-glow md:text-4xl">
              SECURITY
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={secInView ? { width: 80 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mx-auto mt-6 h-px bg-primary/40"
            />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feat, i) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-50px" });
              return (
                <motion.div
                  ref={ref}
                  key={feat.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card-lunar group rounded-sm p-6 text-center transition-all duration-700"
                >
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5 transition-colors duration-500 group-hover:border-primary/40">
                    <feat.icon className="h-5 w-5 text-primary/70" />
                  </div>
                  <h3 className="mb-2 font-display text-[11px] tracking-[0.2em] text-foreground">
                    {feat.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-muted-foreground">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative px-8 py-32 md:px-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            ref={roadRef}
            initial={{ opacity: 0, y: 30 }}
            animate={roadInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground">
              TRAJECTORY
            </p>
            <h2 className="font-display text-3xl tracking-wider text-foreground text-glow md:text-4xl">
              ROADMAP
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={roadInView ? { width: 80 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mx-auto mt-6 h-px bg-primary/40"
            />
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ height: 0 }}
              animate={roadInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute left-[23px] top-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
            />

            <div className="space-y-8">
              {phases.map((phase, i) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: "-30px" });
                return (
                  <motion.div
                    ref={ref}
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary/50">
                      <span className="font-display text-sm text-primary">{phase.phase}</span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-display text-xs tracking-[0.2em] text-foreground">{phase.title}</h3>
                      <p className="mt-1 font-body text-sm text-muted-foreground">{phase.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecurityRoadmapSection;

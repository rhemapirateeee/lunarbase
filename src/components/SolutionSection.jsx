import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Radio, Brain, Shield } from "lucide-react";

const flowSteps = [
  { label: "quoteExactIn()", sub: "Router requests deterministic quote" },
  { label: "Oracle + Spread Engine", sub: "Pyth/CEX mid with fee overlays" },
  { label: "swapExactIn() + Checks", sub: "deadline, minOut, freshness, limits" },
];

const SolutionSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const flowRef = useRef(null);
  const flowInView = useInView(flowRef, { once: true, margin: "-50px" });
  const modesRef = useRef(null);
  const modesInView = useInView(modesRef, { once: true, margin: "-50px" });

  return (
    <section id="solution" className="relative overflow-hidden px-8 py-32 md:px-16">
      <div className="absolute inset-0 gradient-lunar pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground">
            THE ENGINE
          </p>
          <h2 className="font-display text-3xl tracking-wider text-foreground text-glow md:text-4xl">
            THE SOLUTION
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 h-px bg-primary/40"
          />
          <p className="mx-auto mt-8 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            PropDEX is a single onchain contract that holds inventory and produces deterministic,
            oracle-anchored quotes. No solver market, no intent auction, no off-chain negotiation.
          </p>
        </motion.div>

        {/* Core Pillars */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Radio,
              title: "ORACLE-ANCHORED",
              desc: "Every quote derives from real-time oracle mid-price aggregated from Pyth Hermes (400ms updates) and CEX websocket feeds. Quotes track the market within 250ms.",
            },
            {
              icon: Brain,
              title: "AVELLANEDA-STOIKOV",
              desc: "Continuously adjusts reference price based on inventory position, market volatility, and order flow density. Inventory skew drives rebalancing; volatility spikes widen spreads.",
            },
            {
              icon: Shield,
              title: "DETERMINISTIC",
              desc: "Two functions — quoteExactIn never reverts, swapExactIn fills or reverts with a reason. Hard onchain constraints: deadline, minOut, oracle freshness, capacity limits.",
            },
          ].map((item, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-80px" });
            return (
              <motion.div
                ref={ref}
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="card-lunar group rounded-sm p-8 transition-all duration-700"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5 transition-colors duration-500 group-hover:border-primary/40 group-hover:bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary/70 transition-colors duration-500 group-hover:text-primary" />
                </div>
                <h3 className="mb-3 font-display text-sm tracking-[0.2em] text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Execution Flow */}
        <motion.div
          ref={flowRef}
          initial={{ opacity: 0, y: 30 }}
          animate={flowInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="mb-10 text-center font-display text-sm tracking-[0.3em] text-muted-foreground">
            EXECUTION FLOW
          </h3>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-0">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={flowInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  className="card-lunar rounded-sm px-6 py-4 text-center min-w-[200px]"
                >
                  <div className="font-mono text-xs text-primary">{step.label}</div>
                  <div className="mt-1 font-body text-[11px] text-muted-foreground">{step.sub}</div>
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={flowInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4 text-primary/40 hidden md:block" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Execution Modes */}
        <motion.div
          ref={modesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={modesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto"
        >
          {[
            { num: "01", title: "PUBLIC MODE", desc: "Permissionless, spread-protected." },
            { num: "02", title: "PROTECTED MODE", desc: "EIP-712 auth, private ordering." },
          ].map((mode, i) => (
            <motion.div
              key={mode.num}
              initial={{ opacity: 0, y: 20 }}
              animate={modesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-lunar flex items-start gap-4 rounded-sm p-6"
            >
              <span className="font-display text-2xl text-primary/30">{mode.num}</span>
              <div>
                <h4 className="font-display text-xs tracking-[0.2em] text-foreground">{mode.title}</h4>
                <p className="mt-1 font-body text-sm text-muted-foreground">{mode.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

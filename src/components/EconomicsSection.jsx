import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const feeComponents = [
  { name: "Base fee", desc: "Minimum spread per pair, governance-adjustable" },
  { name: "Inventory impact", desc: "Widens when position is skewed, incentivizes rebalancing" },
  { name: "Capacity pressure", desc: "Widens as per-window utilization increases" },
  { name: "A-S overlay", desc: "Dynamic component from Avellaneda-Stoikov risk model" },
];

const valueFlows = [
  { num: "01", title: "PROTOCOL TREASURY", desc: "Protocol growth and operations" },
  { num: "02", title: "PARTNER REBATES", desc: "Per-fill rebates to routing partners" },
  { num: "03", title: "INVENTORY REBALANCING", desc: "Inventory health and tighter execution" },
];

const EconomicsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const feeRef = useRef(null);
  const feeInView = useInView(feeRef, { once: true, margin: "-50px" });
  const flowRef = useRef(null);
  const flowInView = useInView(flowRef, { once: true, margin: "-50px" });

  return (
    <section id="economics" className="relative px-8 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground">
            REVENUE MODEL
          </p>
          <h2 className="font-display text-3xl tracking-wider text-foreground text-glow md:text-4xl">
            ECONOMICS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 h-px bg-primary/40"
          />
          <p className="mx-auto mt-8 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            PropDEX earns the spread between oracle mid-price and fill price on every successful swap.
            Revenue is transactional, not subsidy-driven.{" "}
            <span className="text-foreground">No token emissions. No liquidity mining.</span>
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Fee Structure */}
          <motion.div
            ref={feeRef}
            initial={{ opacity: 0, x: -30 }}
            animate={feeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-8 font-display text-sm tracking-[0.3em] text-muted-foreground">
              FEE STRUCTURE
            </h3>
            <div className="space-y-1">
              {feeComponents.map((fee, i) => (
                <motion.div
                  key={fee.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={feeInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-sm border border-border/50 bg-secondary/20 px-5 py-4 transition-colors duration-300 hover:border-primary/20"
                >
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <div>
                    <span className="font-body text-sm text-foreground">{fee.name}</span>
                    <p className="mt-0.5 font-body text-xs text-muted-foreground">{fee.desc}</p>
                  </div>
                </motion.div>
              ))}
              <p className="pt-3 font-body text-xs text-muted-foreground italic">
                All components are onchain-readable and independently verifiable.
              </p>
            </div>
          </motion.div>

          {/* Value Flow */}
          <motion.div
            ref={flowRef}
            initial={{ opacity: 0, x: 30 }}
            animate={flowInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-8 font-display text-sm tracking-[0.3em] text-muted-foreground">
              VALUE FLOW
            </h3>

            <div className="mb-6 card-lunar rounded-sm px-5 py-4 text-center">
              <span className="font-body text-xs tracking-wider text-muted-foreground">SWAP VOLUME</span>
              <span className="mx-3 text-primary/40">→</span>
              <span className="font-body text-xs tracking-wider text-foreground">SPREAD REVENUE</span>
            </div>

            <div className="space-y-3">
              {valueFlows.map((flow, i) => (
                <motion.div
                  key={flow.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={flowInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="card-lunar flex items-start gap-4 rounded-sm p-5"
                >
                  <span className="font-display text-lg text-primary/30">{flow.num}</span>
                  <div>
                    <h4 className="font-display text-xs tracking-[0.2em] text-foreground">{flow.title}</h4>
                    <p className="mt-1 font-body text-sm text-muted-foreground">{flow.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-sm border border-border/50 bg-secondary/20 px-5 py-4">
              <p className="font-body text-xs text-muted-foreground">
                <span className="text-foreground">Partner Economics:</span> Routing integrators earn
                configurable rebates on every fill, paid in the output token from realized spread revenue.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EconomicsSection;

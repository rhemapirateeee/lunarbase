import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Layers, AlertTriangle } from "lucide-react";

const taxes = [
  {
    icon: TrendingDown,
    title: "THE LVR TAX",
    stat: "5–20 bps",
    statLabel: "per trade on volatile pairs",
    description:
      "Every AMM that derives price from its own reserves pays a structural correction cost. When ETH moves, the pool quotes a stale price until an arbitrageur corrects it — extracting $1-2M per day from LPs and traders on Base alone.",
  },
  {
    icon: AlertTriangle,
    title: "THE SANDWICH TAX",
    stat: "3–8 bps",
    statLabel: "median extraction per victim",
    description:
      "Despite Base's centralized sequencer, same-block MEV persists for mid-sized swaps ($10k–$100k). 1-3% of public AMM swaps on Base show sandwich patterns. For a $50k swap, that's $15–40 in invisible cost.",
  },
  {
    icon: Layers,
    title: "THE FRAGMENTATION TAX",
    stat: "50+",
    statLabel: "liquidity venues on Base",
    description:
      "Each hop adds 30–50k gas, and multi-hop routes are inherently fragile — one pool's quote changing between routing and execution cascades into worse fills or reverts.",
  },
];

const ProblemSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="relative px-8 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
        >
          <p className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground">
            THE HIDDEN COST
          </p>
          <h2 className="font-display text-3xl tracking-wider text-foreground text-glow md:text-4xl">
            THE PROBLEM
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 h-px bg-primary/40"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-20 max-w-2xl text-center font-body text-sm leading-relaxed text-muted-foreground"
        >
          Base trades <span className="text-foreground">$2–4B daily</span> across 50+ venues.
          Every swap silently pays three taxes:
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {taxes.map((tax, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-80px" });
            return (
              <motion.div
                ref={ref}
                key={tax.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="card-lunar group rounded-sm p-8 transition-all duration-700"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-sm border border-destructive/20 bg-destructive/5">
                  <tax.icon className="h-5 w-5 text-destructive/70" />
                </div>
                <h3 className="mb-2 font-display text-sm tracking-[0.2em] text-foreground">
                  {tax.title}
                </h3>
                <div className="mb-4">
                  <span className="font-display text-2xl text-foreground text-glow">{tax.stat}</span>
                  <span className="ml-2 font-body text-xs text-muted-foreground">{tax.statLabel}</span>
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {tax.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

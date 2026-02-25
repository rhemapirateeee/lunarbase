import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Orbit, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Orbit,
    title: "ORBITAL STATION",
    description: "A permanent relay point between Earth and the lunar surface, enabling continuous communication and supply missions.",
  },
  {
    icon: Shield,
    title: "SHIELDED HABITAT",
    description: "Advanced regolith-based radiation shielding protects inhabitants from cosmic radiation and micrometeorites.",
  },
  {
    icon: Zap,
    title: "FUSION POWER",
    description: "Helium-3 harvesting from the lunar soil powers next-generation fusion reactors for limitless clean energy.",
  },
  {
    icon: Globe,
    title: "EARTH LINK",
    description: "Quantum-encrypted laser communication maintains real-time data links between Lunarbase and Earth.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="card-lunar group rounded-sm p-8 transition-all duration-700"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-secondary/50 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-primary/10">
          <feature.icon className="h-5 w-5 text-muted-foreground transition-colors duration-500 group-hover:text-primary" />
        </div>
        <div className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-primary/20" />
      </div>
      <h3 className="mb-3 font-display text-sm tracking-[0.2em] text-foreground">
        {feature.title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="relative px-8 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground">
            CORE SYSTEMS
          </p>
          <h2 className="font-display text-3xl tracking-wider text-foreground text-glow md:text-4xl">
            TECHNOLOGY
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 h-px bg-primary/40"
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

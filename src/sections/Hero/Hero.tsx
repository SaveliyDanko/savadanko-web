import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { OrbitingSkills } from "@/components/ui";

const stats = [
  { value: 2, suffix: "+", label: "Years building" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Technologies" },
];

function CountUp({
  target,
  suffix,
  delay = 0,
}: {
  target: number;
  suffix: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      const duration = 1200;
      const steps = target;
      const stepTime = duration / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) clearInterval(interval);
      }, stepTime);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, target, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 lg:grid-cols-2 lg:gap-16 lg:py-0">
        {/* Left — content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Role badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7195ff]/20 bg-[#7195ff]/5 px-5 py-2 text-sm font-medium text-[#7195ff]">
            <span className="h-2 w-2 rounded-full bg-[#7195ff]" />
            Frontend Developer
          </span>

          {/* Name */}
          <h1 className="mt-6 text-7xl font-bold leading-[1.1] tracking-tight sm:text-8xl lg:text-9xl">
            Sava
            <br />
            <span className="animate-shimmer bg-[length:200%_200%] bg-gradient-to-br from-primary-light via-[#c084fc] to-primary bg-clip-text text-transparent">
              Danko
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl lg:text-[22px]">
            I design and build{" "}
            <strong className="text-text">modern web applications</strong>,{" "}
            <strong className="text-text">responsive interfaces</strong>, and{" "}
            <strong className="text-text">interactive SPAs</strong>. Focused on
            performance, clean code, and quality user experience.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary-dark px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(139,92,246,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View my Work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary-dark to-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </motion.button>

            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border-light bg-transparent px-7 py-3.5 text-sm font-medium text-text-muted transition-colors duration-300 hover:text-text"
              whileHover={{ scale: 1.04, borderColor: "rgba(139,92,246,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Mail
                size={16}
                className="transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
              />
              Get in Touch
              <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid w-full max-w-xl grid-cols-3 gap-4 sm:mt-12 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="min-w-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              >
                <p className="bg-gradient-to-r from-[#9fb5ff] via-primary-light to-primary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    delay={200 + i * 150}
                  />
                </p>
                <p className="mt-1 text-[15px] text-[#4b5395] sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — orbiting skills */}
        <motion.div
          className="hidden lg:flex justify-center lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <OrbitingSkills />
        </motion.div>
      </div>
    </section>
  );
}

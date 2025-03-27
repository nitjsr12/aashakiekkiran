"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BookOpen, Users, CalendarCheck } from "lucide-react";

// Animated counter component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          end={value}
          duration={2}
          suffix={suffix}
          className="text-5xl font-bold text-primary"
        />
      )}
    </div>
  );
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const statItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  hover: { y: -5 },
};

export function ImpactStats() {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Students Supported */}
          <motion.div 
            className="text-center p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            variants={statItem}
            whileHover="hover"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <AnimatedCounter value={1000} suffix="+" />
            <p className="text-lg mt-4 font-medium text-gray-600 dark:text-gray-300">
              Students Supported
            </p>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>

          {/* Schools Partnered */}
          <motion.div 
            className="text-center p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            variants={statItem}
            whileHover="hover"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </div>
            <AnimatedCounter value={50} suffix="+" />
            <p className="text-lg mt-4 font-medium text-gray-600 dark:text-gray-300">
              Schools Partnered
            </p>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>

          {/* Monthly Visits */}
          <motion.div 
            className="text-center p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            variants={statItem}
            whileHover="hover"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <CalendarCheck className="w-8 h-8 text-primary" />
              </div>
            </div>
            <AnimatedCounter value={24} />
            <p className="text-lg mt-4 font-medium text-gray-600 dark:text-gray-300">
              Monthly Visits
            </p>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>
        </div>

        {/* Optional decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </motion.section>
  );
}
import React from "react";
import { motion } from "framer-motion";

const TechBadge = ({
  children,
  color = "blue",
  index = 0,
  animated = true,
}) => {
  const colorClasses = {
    blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    green: "bg-green-500/10 border-green-500/30 text-green-400",
    yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
  };

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.span
      custom={index}
      variants={animated ? variants : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
      whileHover={animated ? "hover" : undefined}
      className={`px-3 py-1 border rounded-full text-xs font-medium cursor-default ${colorClasses[color]}`}
    >
      {children}
    </motion.span>
  );
};

export default TechBadge;

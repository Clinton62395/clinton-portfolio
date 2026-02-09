import { motion } from "framer-motion";

export default function StoreLayout({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen flex items-center justify-center px-4 py-24"
    >
      {/* décor gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
            backdrop-blur-xl 
            bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60
            rounded-3xl
            shadow-2xl
            border border-white/10
            overflow-hidden
          "
        >
          {/* ligne gradient */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

          <div className="p-6 sm:p-10">{children}</div>
        </motion.div>
      </div>
    </motion.section>
  );
}

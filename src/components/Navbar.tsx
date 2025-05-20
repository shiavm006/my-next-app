"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/courses" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "bg-gradient-to-b from-white via-white/80 to-white/60 dark:from-gray-950 dark:via-gray-950/80 dark:to-gray-950/60",
        "backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20",
        "shadow-sm shadow-gray-100/50 dark:shadow-gray-950/50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="relative z-10 px-3 py-2">
                <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  SM
                </span>
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <motion.div 
              className="flex items-center p-1 rounded-full"
              initial={false}
              animate={{
                backgroundColor: active ? "rgba(243, 244, 246, 0.05)" : "transparent"
              }}
              transition={{ duration: 0.2 }}
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="relative block"
                    onMouseEnter={() => setActive(item.name)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div className="relative px-5 py-2 rounded-full group">
                      <span className="relative z-10 text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                        {item.name}
                      </span>
                      {active === item.name && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-800" />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
                        </motion.div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={cn(
                  "w-5 h-0.5 bg-current transition-all duration-300 ease-out",
                  isMobileMenuOpen ? "translate-y-[3px] rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "w-5 h-0.5 bg-current mt-1 transition-all duration-300 ease-out",
                  isMobileMenuOpen ? "-translate-y-[3px] -rotate-45 -mt-0.5" : ""
                )}
              />
            </div>
          </motion.button>

          {/* Placeholder div for flex alignment */}
          <div className="hidden md:block w-[68px]" />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden border-t border-gray-200/20 dark:border-gray-800/20 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md"
          >
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group block"
                  >
                    <div className="relative px-4 py-2 rounded-full group-hover:bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 transition-all duration-200">
                      <span className="relative z-10 text-base font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

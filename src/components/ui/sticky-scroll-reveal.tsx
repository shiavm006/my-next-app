import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    techstack: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const renderContent = (content: React.ReactNode) => {
    if (React.isValidElement(content)) {
      return content;
    }
    return null;
  };

  return (
    <motion.div
      className="h-[25rem] overflow-y-auto flex justify-center relative rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 w-full max-w-4xl mx-auto">
        <div className="w-full">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className="my-20 p-6 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100 flex items-center gap-2"
              >
                <span className="text-purple-500">⚡</span> {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 mt-6 space-y-4"
              >
                <p className="text-base">• {item.description1}</p>
                <p className="text-base">• {item.description2}</p>
                <p className="text-base">• {item.description3}</p>
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <p className="font-semibold text-slate-200 mb-2">Tech Stack & Skills:</p>
                  <p className="text-slate-400">{item.techstack}</p>
                </div>
                <div className="mt-4 text-sm text-purple-400 font-medium">
                  {renderContent(item.content)}
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
    </motion.div>
  );
};

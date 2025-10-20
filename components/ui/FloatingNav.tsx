"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems = [],
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      // Always show navigation when at the top of the page
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        // Show navigation when scrolling up, hide when scrolling down
        if (direction < 0) {
          setVisible(true); // Scrolling up
        } else {
          setVisible(false); // Scrolling down
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "top-10 z-[5000] fixed inset-x-0 flex justify-center items-center space-x-4 bg-black-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mx-auto px-10 py-5 border border-white/[0.2] dark:border-white/[0.2] rounded-lg max-w-fit",
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:hover:text-neutral-300 dark:text-neutral-50"
            )}
          >
            <span className="sm:hidden block">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </a>
        ))}
        {/* <button className="relative px-4 py-2 border border-neutral-200 dark:border-white/[0.2] rounded-full font-medium text-black dark:text-white text-sm">
          <span>Login</span>
          <span className="-bottom-px absolute inset-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto w-1/2 h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};

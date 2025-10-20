"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "group/pin z-50 relative cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="top-1/2 left-1/2 absolute mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="top-1/2 left-1/2 absolute flex justify-start items-start shadow-[0_8px_16px_rgb(0_0_0/0.4)] p-4 border border-white/[0.1] group-hover/pin:border-white/[0.2] rounded-2xl overflow-hidden transition duration-700"
        >
          <div className={cn("z-50 relative", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    // change w-96 to w-full
    <motion.div className="z-[60] flex justify-center items-center opacity-0 group-hover/pin:opacity-100 w-full h-80 transition duration-500 pointer-events-none">
      <div className="inset-0 flex-none -mt-7 w-full h-full">
        <div className="top-0 absolute inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="z-10 relative flex items-center space-x-2 bg-zinc-950 px-4 py-0.5 rounded-full ring-1 ring-white/10"
          >
            <span className="inline-block z-20 relative py-0.5 font-bold text-white text-xs">
              {title}
            </span>

            <span className="-bottom-0 left-[1.125rem] absolute bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 group-hover/btn:opacity-40 w-[calc(100%-2.25rem)] h-px transition-opacity duration-500"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="top-1/2 left-1/2 absolute mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="top-1/2 left-1/2 absolute bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-[50%] w-[11.25rem] h-[11.25rem]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="top-1/2 left-1/2 absolute bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-[50%] w-[11.25rem] h-[11.25rem]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="top-1/2 left-1/2 absolute bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-[50%] w-[11.25rem] h-[11.25rem]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="right-1/2 bottom-1/2 absolute bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] w-px h-20 group-hover/pin:h-40 translate-y-[14px]" />
          <motion.div className="right-1/2 bottom-1/2 absolute bg-gradient-to-b from-transparent to-cyan-500 w-px h-20 group-hover/pin:h-40 translate-y-[14px]" />
          <motion.div className="right-1/2 bottom-1/2 z-40 absolute bg-cyan-600 blur-[3px] rounded-full w-[4px] h-[4px] translate-x-[1.5px] translate-y-[14px]" />
          <motion.div className="right-1/2 bottom-1/2 z-40 absolute bg-cyan-300 rounded-full w-[2px] h-[2px] translate-x-[0.5px] translate-y-[14px]" />
        </>
      </div>
    </motion.div>
  );
};

"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Python", "Typescript"];
  const rightLists = ["Flutter", "NextJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "cbagajurel@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento relative flex flex-col justify-between space-y-4 row-span-1 shadow-input hover:shadow-xl dark:shadow-none border border-white/[0.1] rounded-3xl overflow-hidden transition duration-200",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute w-full h-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="w-full h-full object-center object-cover"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="z-50 absolute inset-0 flex justify-center items-center px-4 font-bold text-white text-3xl md:text-4xl lg:text-7xl text-center pointer-events-none"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="z-10 md:max-w-32 font-sans font-extralight text-[#C1C2D3] md:text-xs text-sm lg:text-base">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="-right-3 lg:-right-2 absolute flex gap-1 lg:gap-5 w-fit">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#10132E] opacity-50 lg:opacity-100 px-3 lg:px-3 py-2 lg:py-4 rounded-lg text-xs lg:text-base text-center"
                  >
                    {item}
                  </span>
                ))}
                <span className="bg-[#10132E] px-3 lg:px-3 py-4 lg:py-4 rounded-lg text-center"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="bg-[#10132E] px-3 lg:px-3 py-4 lg:py-4 rounded-lg text-center"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#10132E] opacity-50 lg:opacity-100 px-3 lg:px-3 py-2 lg:py-4 rounded-lg text-xs lg:text-base text-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="relative mt-5">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

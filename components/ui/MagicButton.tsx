import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <>
      <button
        className="inline-flex relative md:mt-10 p-[1px] rounded-lg md:w-60 h-12 overflow-hidden"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_2s_linear_infinite]" />
        <span
          className={`inline-flex justify-center items-center bg-slate-950 backdrop-blur-3xl px-3 py-1 rounded-lg w-full h-full font-medium text-white text-sm cursor-pointer ${otherClasses} gap-2`}
        >
          {position === "left" && icon}
          {title}
          {position == "right" && icon}
        </span>
      </button>
      ;
    </>
  );
};

export default MagicButton;

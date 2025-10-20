import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="gap-10 grid grid-cols-1 lg:grid-cols-4 mt-12 w-full">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 border-neutral-200 dark:border-slate-800 text-black dark:text-white"
          >
            <div className="flex lg:flex-row flex-col lg:items-center gap-2 p-3 md:p-5 lg:p-10 py-6">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h1 className="font-bold text-xl md:text-2xl text-start">
                  {card.title}
                </h1>
                <p className="mt-3 font-semibold text-white-100 text-start">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import { InfiniteMovingCards } from "./ui/MovingCard";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        Kind word from <span className="text-purple">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        <div className="relative flex flex-col items-center rounded-md h-[50vh] md:h-[30rem] overflow-hidden antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;

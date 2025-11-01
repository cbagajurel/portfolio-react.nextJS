"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Filter projects based on active tab
  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((project) => project.category === activeTab);

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "flutter", label: "Flutter" },
    { id: "react", label: "React" },
    { id: "python-react", label: "Python + React" },
  ];

  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-purple text-white shadow-lg scale-105"
                : "bg-black-100 text-white-100 hover:bg-black-200 border border-white/[0.1]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-25 gap-y-8 mt-10 p-4">
        {filteredProjects.map((item) => (
          <div
            className="flex justify-center items-center w-[80vw] sm:w-[570px] h-[25rem] sm:h-[41rem] lg:min-h-[32.5rem]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex justify-center items-center mb-10 w-[80vw] sm:w-[570px] h-[30vh] sm:h-[40vh] overflow-hidden">
                <div
                  className="relative lg:rounded-3xl w-full h-full overflow-hidden"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="bottom-0 z-10 absolute"
                />
              </div>

              <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                {item.title}
              </h1>

              <p
                className="font-light lg:font-normal text-sm lg:text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex justify-between items-center mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center bg-black border border-white/[.2] rounded-full w-8 lg:w-10 h-8 lg:h-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="flex text-purple md:text-xs text-sm lg:text-sm">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

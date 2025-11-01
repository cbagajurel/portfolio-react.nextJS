import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 md:-top-20 -left-10 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full w-[50vw] h-[80vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 w-[50vw] h-[80vh]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div className="top-0 left-0 absolute flex justify-center items-center bg-grid-black-100/[0.2] dark:bg-grid-white/[0.03] bg-white dark:bg-black-100 w-full h-screen">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute inset-0 flex justify-center items-center bg-white dark:bg-black-100 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="z-10 relative flex justify-center my-20">
        <div className="flex flex-col justify-center items-center max-w-[89vw] lg:max-w-[60vw] md:max-w-2xl">
          <p className="max-w-80 text-blue-100 text-xs text-center uppercase tracking-widest">
            Mobile & Web Development with Flutter & React
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-[40px] md:text-5xl lg:text-6xl text-center"
          />

          <p className="mb-4 text-white text-sm md:text-lg lg:text-2xl text-center md:tracking-wider">
            Hi! I&apos;m CBA Gajurel, a Flutter & React Developer based in
            Kalanki, Kathmandu.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={undefined}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

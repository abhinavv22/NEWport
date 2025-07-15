import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1 */}
        <div className="relative flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="Coding illustration"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Abhinav Singh</p>
            <p className="subtext">
              I build powerful software that solves real problems. Passionate coder. Relentless debugger. Future‑ready developer.
            </p>
          </div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-4 h-1/2 bg-gradient-to-t from-indigo sm:h-1/3" />
        </div>

        {/* Grid 2 */}
        <div className="relative grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="relative flex h-full w-full items-center justify-center"
          >
            <p className="z-10 flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
              <p>MOVE IT</p>
            </p>

            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="PYTHON"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLIDITY"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="BLOCKCHAIN"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/python.png"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/PANDAS1.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="relative grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based on Earth and open to remote work worldwide. If you need me, I can travel.
            </p>
            <p>
              <a
                href="mailto:abhinavsinghh2019@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral400"
              >
                Just contact me&nbsp;
              </a>
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex size-full flex-col items-center justify-center gap-4">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="relative grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 w-full h-full start-[50%] md:inset-y-9 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

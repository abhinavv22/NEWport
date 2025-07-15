import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { highlights } from "../constants";

const firstRow = highlights.slice(0, highlights.length / 2);
const secondRow = highlights.slice(highlights.length / 2);

const HighlightCard = ({ icon, title, description }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal transition-all duration-300 ease-in-out"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <figcaption className="text-base font-semibold text-white">{title}</figcaption>
      </div>
      <blockquote className="text-sm text-white/90">{description}</blockquote>
    </figure>
  );
};

export default function AboutMeHighlights() {
  return (
    <div className="items-start mt-24 md:mt-32 c-space">
      <h2 className="text-heading text-center">A Little More About Me</h2>
      <p className="text-center text-white/60 max-w-2xl mx-auto mt-2">
        Here's what defines me — not through client reviews, but through how I work, what I believe in, and the values I bring to every team or project.
      </p>

      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        </Marquee>

        {/* Gradient edges */}
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}

import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "python",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "php",
    "react",
    "sql",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  // never mutate the original array!
  const reversedSkills = [...skills].reverse();

  return (
    <div className="relative flex h-[24rem] w-full items-center justify-center">
      {/* outer ring */}
      <OrbitingCircles radius={150} iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}.svg`} size={48} />
        ))}
      </OrbitingCircles>

      {/* inner ring, half‑step offset so spokes don’t line up */}
      <OrbitingCircles
        radius={100}
        iconSize={20}
        reverse
        speed={2}
        startAngle={360 / reversedSkills.length / 2}
      >
        {reversedSkills.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}.svg`} size={32} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

/* centre every icon on its coordinate, keep hover effect */
const Icon = ({ src, size }) => (
  <img
    src={src}
    width={size}
    height={size}
    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-sm transition-transform duration-200 hover:scale-110"
    alt=""
  />
);

import { OrbitingCircles } from "./OrbitingCircles";

const Icon = ({ src, size }) => (
  <img
    src={src}
    width={size}
    height={size}
    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-sm transition-transform duration-200 hover:scale-110"
    alt=""
  />
);

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

  const reversedSkills = [...skills].reverse();

  return (
    <div className="relative flex h-[24rem] w-full items-center justify-center">
      <OrbitingCircles radius={150} iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}.svg`} size={48} />
        ))}
      </OrbitingCircles>

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

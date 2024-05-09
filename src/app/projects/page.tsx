import LikeButton from "./like-button";
import ProjectCard from "./projectCard";

function Header({ title }: { title: string }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const categoryNames = ["Web and Mobile Applications ", "Discord Bots", ,];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul className="projectGrid">
        {categoryNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ProjectCard
        description="Statbot"
        githubLink="https://github.com/ledbetni/StatBot"
      />
      <ProjectCard
        description="SafetyNet"
        githubLink="https://github.com/ledbetni/SafetyNet"
      />
      <ProjectCard
        description="Google Cloud Platform Shipping API"
        githubLink="https://github.com/ledbetni/Google-App-Engine-Portfolio"
      />
      <ProjectCard
        description="React eCommerce App"
        githubLink="https://github.com/ledbetni/react_mySQLEcommerce"
      />
      <ProjectCard
        description="American Veterinary Medical Association App *Source Code Private*"
        githubLink="https://github.com/ledbetni/react_mySQLEcommerce"
      />
      <ProjectCard
        description="Resume Business Card Mobile App"
        githubLink="https://github.com/ledbetni/mobileResume"
      />
    </div>
  );
}

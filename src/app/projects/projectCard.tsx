import React from "react";

interface ProjectCardProps {
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  githubLink,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        margin: "10px",
      }}
    >
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        View on Github
      </a>
    </div>
  );
};

export default ProjectCard;

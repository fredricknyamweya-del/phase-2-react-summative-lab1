import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Project image - hopefully something eye-catching! */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image"
        loading="lazy"
      />
      <div className="project-info">
        {/* Show what category this project falls under */}
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
        </div>
        {/* The title and description speak for themselves */}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;

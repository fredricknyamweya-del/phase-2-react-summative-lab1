import ProjectCard from './ProjectCard.jsx';

function ProjectList({ projects }) {
  // If there is no project(s) found, show an empty state message.
  if (!projects || projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects found. Try adjusting your search or add a new project.</p>
      </div>
    );
  }

  // Projects display section - show all the projects in a nice grid
  return (
    <div className="projects-grid" id="projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;

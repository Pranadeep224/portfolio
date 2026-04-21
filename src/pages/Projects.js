function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>Built using React</p>
        <a href="https://github.com/your-username/project1">
          <button>View Code</button>
        </a>
      </div>

      <div className="project-card">
        <h3>Login System</h3>
        <p>Authentication system</p>
        <a href="https://github.com/your-username/project2">
          <button>View Code</button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
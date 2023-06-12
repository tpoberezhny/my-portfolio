import React from "react";
import styles from "./Projects.module.scss";

function Projects(props) {
  return (
    <div className={styles.projectSection} id="projects">
      <div className={styles.title}>
        <h1>
          My Creative <span>Portfolio</span>
        </h1>
      </div>
      <div className={styles.projectList}>
        {props.projects.map((item, index) => (
          <div key={index} className={styles.project}>
            <img
              width={300}
              height={300}
              src={item.imageUrl}
              alt="Image of Project"
            />
            <h2>{item.title}</h2>
            <h2 className={styles.projectDesc}>{item.description}</h2>
            <form action={item.gitHubLink} target="_blank">
              <button>
                GitHub
                <img
                  width={30}
                  height={30}
                  src="image/github.svg"
                  alt="Git Gub Image"
                />
              </button>
            </form>
            <form action={item.demoLink} target="_blank">
              <button className={styles.demoLink}>
                Demo{" "}
                <img
                  width={30}
                  height={30}
                  src="image/demo.svg"
                  alt="Demo"
                />
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

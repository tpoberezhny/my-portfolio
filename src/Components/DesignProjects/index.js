import React from "react";
import styles from "./DesignProjects.module.scss";

function Projects(props) {
  return (
    <div className={styles.projectSection} id="projects">
      <div className={styles.title}>
        <h1>
          My Design <span>Portfolio</span>
        </h1>
      </div>
      <div className={styles.projectList}>
        {props.designProjects.map((item, index) => (
          <div key={index} className={styles.project}>
            <img
              width={300}
              height={300}
              src={item.imageUrl}
              alt="Project"
            />
            <h2>{item.title}</h2>
            <h2 className={styles.projectDesc}>{item.description}</h2>
            <form action={item.demoLink} target="_blank">
              <button className={styles.demoLink}>
                Figma{" "}
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

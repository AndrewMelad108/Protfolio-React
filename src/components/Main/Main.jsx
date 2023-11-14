import "./Main.css";
import { useState } from "react";
export default function Main() {
  let Projects = [
    {
      id: 1,
      project_title: "landing page",
      project_info:
        "possimus illum unde. Consectetur officia saepe animi maiores ipsum,",
      project_link: "https://github.com/AndrewMelad108",
      github_link: "https://github.com/AndrewMelad108",
      category: ["gridsome", "CSS", "HTML"],
    },
    {
      id: 2,
      project_title: "AM Store",
      project_info:
        "possimus illum unde. Consectetur officia saepe animi maiores ipsum,",
      project_link: "https://github.com/AndrewMelad108",
      github_link: "https://github.com/AndrewMelad108",
      category: ["Vue", "Firebase", "Js", "HTML", "CSS"],
    },
    {
      id: 3,
      project_title: "RestaurantSystem",
      project_info:
        "possimus illum unde. Consectetur officia saepe animi maiores ipsum,",
      project_link: "https://github.com/AndrewMelad108",
      github_link: "https://github.com/AndrewMelad108",
      category: ["Bootstrap", "Firebase", "HTML", "CSS", "Vue"],
    },
    {
      id: 4,
      project_title: "chairs-company",
      project_info:
        "possimus illum unde. Consectetur officia saepe animi maiores ipsum,",
      project_link: "https://github.com/AndrewMelad108",
      github_link: "https://github.com/AndrewMelad108",
      category: ["Bootstrap", "Firebase", "HTML", "CSS", "Vue"],
    },
    {
      id: 5,
      project_title: "simple-front-end-project",
      project_info:
        "possimus illum unde. Consectetur officia saepe animi maiores ipsum,",
      project_link: "https://github.com/AndrewMelad108",
      github_link: "https://github.com/AndrewMelad108",
      category: ["HTML", "CSS"],
    },
  ];
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState(Projects);
  const handleClick = (category) => {
    setActive(category);
    if (category === "all") {
      setProjects(Projects); // Display all projects
    } else {
      let newProjects = Projects.filter((project) => {
        const foundCategory = project.category.find((cat) => cat === category);
        return foundCategory === category;
      });
      setProjects(newProjects);
    }
  };
  return (
    <main className="flex">
      <div className="links flex">
        <button
          onClick={() => {
            handleClick("all");
          }}
          className={active === "all" ? "link active" : "link"}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("CSS");
          }}
          className={active === "CSS" ? "link active" : "link"}
        >
          HtML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("Js");
          }}
          className={active === "Js" ? "link active" : "link"}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("Vue");
          }}
          className={active === "Vue" ? "link active" : "link"}
        >
          Vue
        </button>
        <button
          onClick={() => {
            setActive("React");
          }}
          className={active === "React" ? "link active" : "link"}
        >
          React & MUI
        </button>
      </div>
      <div className="projects flex">
        {projects.map((project) => {
          return (
            <div className="project-card" key={project.id}>
              <img
                src="../../../public/images/4-9.png"
                alt="project-card"
                className="project-image "
              />
              <p className="title">{project.project_title}</p>
              <p className="sub-title">{project.project_info}</p>
              <div className="flex project-icons">
                <div className="flex left">
                  <a href={project.project_link}>
                    <span className="icon-github"></span>
                  </a>
                  <a href={project.project_link}>
                    <span className="icon-link1"></span>
                  </a>
                </div>
                <a className="rigth" href="">
                  more <span className="icon-arrow-right"></span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

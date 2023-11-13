import "./Main.css";
export default function Main() {
  return (
    <main className="flex">
      <div className="links flex">
        <button className="link">all projects</button>
        <button className="link">HtML & CSS</button>
        <button className="link">JavaScript</button>
        <button className="link">Vue</button>
        <button className="link">React & MUI</button>
      </div>
      <div className="projects flex">
        <div className="project-card ">
          <img
            src="../../../public/images/4-9.png"
            alt="project-card"
            className="project-image "
          />
          <p className="title">project-title</p>
          <p className="sub-title">
            possimus illum unde. Consectetur officia saepe animi maiores ipsum,
          </p>
          <div className="flex project-icons">
            <div className="flex left">
              <span className="icon-github"></span>
              <span className="icon-link1"></span>
            </div>
            <a className="rigth" href="">
              more <span className="icon-arrow-right"></span>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="../../../public/images/4-9.png"
            alt="project-card"
            className="project-image"
          />
          <p className="title">project-title</p>
          <p className="sub-title">
            possimus illum undeConsectetur officia saepe animi maiores ipsum,
          </p>
          <div className="flex project-icons">
            <div className="flex left">
              <span className="icon-github"></span>
              <span className="icon-link1"></span>
            </div>
            <a className="rigth" href="">
              more <span className="icon-arrow-right"></span>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="../../../public/images/4-9.png"
            alt="project-card"
            className="project-image"
          />
          <p className="title">project-title</p>
          <p className="sub-title">
            possimus illum undeConsectetur officia saepe animi maiores ipsum,
          </p>
          <div className="flex project-icons">
            <div className="flex left">
              <span className="icon-github"></span>
              <span className="icon-link1"></span>
            </div>
            <a className="rigth" href="">
              more <span className="icon-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

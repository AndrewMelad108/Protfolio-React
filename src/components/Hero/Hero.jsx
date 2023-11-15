import "./Hero.css";
import Lottie from "lottie-react";
import Developer from "../../../public/animation/Developer.json";
export default function Hero() {
  return (
    <div className=" Hero flex">
      <div className="Hero-info">
        <img
          src="../../../public/me-modified.png"
          className="img-person"
          alt="img-person"
        />
        <span className="icon-verified"></span>
        <h1 className="Hero-info-title">Frontend Engineer (Vue.js/React.js)</h1>
        <p className="Hero-info-des">
          As Andrew Melad, I'm a passionate frontend developer specialized in
          Vue.js and React.js. My focus is on crafting engaging user interfaces
          and dynamic web solutions. Through diverse projects, I've honed skills
          in modern tech, fostering an environment for implementing cutting-edge
          tools. Continuously exploring new technologies, I'm presently
          immersing myself in React.js and Next.js to enhance web experiences
          further, merging these with my Vue.js expertise.
        </p>
        <div className="all-icons flex">
          <span className="icon-linkedin-square"></span>
          <span className="icon-instagram"></span>
          <span className="icon-github"></span>
          <span className="icon-facebook-square"></span>
        </div>
      </div>
      <Lottie className="Hero-image" animationData={Developer} />
    </div>
  );
}

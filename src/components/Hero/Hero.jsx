import "./Hero.css";
import Lottie from "lottie-react";
import Developer from "../../animation/Developer.json";
import { AnimatePresence, motion } from "framer-motion";
export default function Hero() {
  return (
    <div className=" Hero flex">
      <AnimatePresence>
        <motion.div
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ type: "spring", damping: 8, stiffness: 50 }}
          className="Hero-info"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-b8df4.appspot.com/o/me-modified.png?alt=media&token=5177bfd9-6f13-49a5-a41d-daaa70a57c1c"
            className="img-person"
            alt="img-person"
          />
          <span className="icon-verified"></span>
          <h1 className="Hero-info-title">
            Frontend Engineer (Vue.js/React.js)
          </h1>
          <p className="Hero-info-des">
            As Andrew Melad, I'm a passionate frontend developer specialized in
            Vue.js and React.js. My focus is on crafting engaging user
            interfaces and dynamic web solutions. Through diverse projects, I've
            honed skills in modern tech, fostering an environment for
            implementing cutting-edge tools. Continuously exploring new
            technologies, I'm presently immersing myself in React.js and Next.js
            to enhance web experiences further, merging these with my Vue.js
            expertise.
          </p>
          <div className="all-icons flex">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/andrew-melad-b77ab3198/"
            >
              <span className="icon-linkedin-square"></span>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/andrew_melad7/?igshid=NzZlODBkYWE4Ng%3D%3D"
            >
              <span className="icon-instagram"></span>
            </a>
            <span className="icon-github">
              <a target="_blank" href="https://github.com/AndrewMelad108"></a>
            </span>
            <a
              href="https://www.facebook.com/AndrewMelad70?mibextid=ZbWKwL"
              target="_blank"
            >
              <span className="icon-facebook-square"></span>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
      <Lottie className="Hero-image" animationData={Developer} />
    </div>
  );
}

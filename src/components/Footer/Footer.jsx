import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="flex">
      <ul className="flex links">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>
      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

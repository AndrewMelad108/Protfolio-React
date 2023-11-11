import "./Header.css";
import { useState } from "react";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex">
      <button
        className="flex mode none"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <span className="icon-menu"></span>
      </button>
      <div></div>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Article</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      {showMenu && (
        <div className="fixed">
          <ul className="Model">
            <li
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <button>
                <span className="icon-close"></span>
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Article</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
      <button className="flex mode">
        <span className="icon-moon-o"></span>
      </button>
    </header>
  );
}

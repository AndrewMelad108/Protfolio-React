import "./Hero.css";
export default function Hero() {
  return (
    <div className="flex Hero">
      <div className="Hero-info">
        <img
          src="../../../public/me-modified.png"
          className="img-person"
          alt="img-person"
        />
        <span className="icon-verified"></span>
        <h1 className="Hero-info-title">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="Hero-info-des">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="all-icons flex">
          <span className="icon-linkedin-square"></span>
          <span className="icon-instagram"></span>
          <span className="icon-github"></span>
          <span className="icon-facebook-square"></span>
        </div>
      </div>
      <div className="Hero-image">img</div>
    </div>
  );
}

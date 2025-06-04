import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Frontend Developer <span>+</span> Photographer
        </h1>
        <p className="hero__subtitle">
          I build performant websites and capture stunning visuals for brands that want to stand out.
        </p>
        <Link to="/contact" className="hero__cta">
          Let's Work Together
        </Link>
      </div>
    </section>
  );
}
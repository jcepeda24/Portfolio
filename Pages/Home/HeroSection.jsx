export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jaypee Cepeda</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
          </h1>
          <p className="hero--section--description">
            A full-stack developer helps build and maintain both the front-end
            and the back-end of a website.
            <br /> The front end (the parts of a website a user sees and
            interacts with) and the back end
            <br />
            (the behind-the-scenes data storage and processing) require
            different skill sets.
          </p>
        </div>
        <a className="btn btn-primary" href="./pdf/jaypeecv.pdf" download>
          Download my CV
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img1.png" alt="Hero Section" />
      </div>
    </section>
  );
}

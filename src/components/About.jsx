import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container abt">
        <div className="row justify-content-center">
          <h5 className="text-center mt-5">About Me</h5>
          <div
  data-aos="fade-right"
  data-aos-duration="2500"
  className="col-lg-5 col-sm-6 col-12 abt-brand"
>
  <div className="card brand-name" style={{ backgroundColor: "#111111" }}>
    <h3
      data-aos="zoom-in"
      data-aos-duration="2500"
      className="bg-[#111111]"
      style={{color: '#e7008a'}}
    >
      Dominion
    </h3>
    <p
      data-aos="zoom-in"
      data-aos-duration="2500"
      className="bg-[#111111] text-white"
    >
      FullStack Developer
    </p>
    {/* Badge section */}
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      className="tech-badges d-flex justify-content-center align-items-center gap-3 flex-wrap"
    >
      <span className="badge tech-badge">
        <img
        src="/Image/js2.jpg"
          alt="MongoDB"
          width="40"
          height="40"
        />
        MongoDB
      </span>
      <span className="badge tech-badge">
        <img
        src="/Image/js7.jpg"
          alt="MongoDB"
          width="40"
          height="40"
        />
        Expressjs
      </span>
      <span className="badge tech-badge">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
          width="40"
          height="40"
        />
        React
      </span>
      <span className="badge tech-badge">
        <img
          src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/master/icons/nodejs.svg"
          alt="Node.js"
          width="40"
          height="40"
        />
        Node.js
      </span>
      <span className="badge tech-badge">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
          alt="Postgres"
          width="40"
          height="40"
        />
        PostgreSQL
      </span>
      <span className="badge tech-badge">
        <img
        src="/Image/js.png"
          alt="JavaScript"
          width="40"
          height="40"
        />
        JavaScript
      </span>
      <span className="badge tech-badge">
        <img
        src="/Image/js5.png"
          alt="JavaScript"
          width="40"
          height="40"
        />
        Next Js
      </span>
      <span className="badge tech-badge">
        <img
        src="/Image/js8.png"
          alt="JavaScript"
          width="40"
          height="40"
        />
        TypeScript
      </span>
    </div>
  </div>
</div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="col-lg-5 col-sm-6 col-12"
          >
            <div className="card abt-card">
              <p data-aos="zoom-in" data-aos-duration="2500" className="px-3">
                I'm a Fullstack Developer with 2years experience working on several projects, proficient in transforming
                conceptual designs into fully functional websites. with
                expertise in <span style={{color: '#e7008a'}}>MERN</span>. Reactjs, JavaScript, Nextjs, Express, Node.js, MongoDB, Redux
                Toolkits, Postgres, Context API, Bootstrap and Tailwind, i craft intuitive
                user interfaces and seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

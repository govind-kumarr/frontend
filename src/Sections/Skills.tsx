import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      {/* Design Skills */}
      <div className="skills__design">
        <h3 className="skills__design--title">Design Skills</h3>
        <h4>Web Design</h4>
        <div className="skills__design--progress">
          <span className="skills__design--progress__1" />
        </div>
        <h4>Print Design</h4>
        <div className="skills__design--progress">
          <span className="skills__design--progress__2" />
        </div>
        <h4>Logo Design</h4>
        <div className="skills__design--progress">
          <span className="skills__design--progress__3" />
        </div>
        <h4>Graphic Design</h4>
        <div className="skills__design--progress">
          <span className="skills__design--progress__4" />
        </div>
      </div>
      {/* Coding Skills */}
      <div className="skills__coding">
        <h3 className="skills__coding--title">Coding Skills</h3>
        <h4>HTML / CSS</h4>
        <div className="skills__coding--progress">
          <span className="skills__coding--progress__1" />
        </div>
        <h4>JavaScript</h4>
        <div className="skills__coding--progress">
          <span className="skills__coding--progress__2" />
        </div>
        <h4>Python</h4>
        <div className="skills__coding--progress">
          <span className="skills__coding--progress__3" />
        </div>
        <h4>SQL</h4>
        <div className="skills__coding--progress">
          <span className="skills__coding--progress__4" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

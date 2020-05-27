import React from "react";

const Hero = ({ children }) => {
  return (
    <section className="hero is-fullheight swell-hero">
      <div className="container">{children}</div>
    </section>
  );
};

export default Hero;

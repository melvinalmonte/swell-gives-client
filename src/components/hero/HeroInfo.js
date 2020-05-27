import React from "react";

const HeroInfo = () => {
  return (
    <section className="hero swell-hero-info">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-5">
              <h2 className="subtitle swell-hero-info-content ">
                The unprecedented challenges of Covid-19 leave millions of New
                Jersey citizens in need. Large scale goods donations can help us
                recover.
                <br />
                <br />
                <strong>View our campaigns to donate goods. </strong>
              </h2>
              <p>Featured Relief Partner</p>
              <div className="swell-relief-partner-image ">
                <figure className="image is-128x128 swell-custom-figure">
                  <img src={"/assets/NJPRFLogo.png"} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInfo;

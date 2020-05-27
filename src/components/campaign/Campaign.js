import React from "react";
import { Cards } from "../cards";

const Campaign = ({ children }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <h2 className="subtitle  is-6 swell-campaigns-subtitle">
              Featured Campaigns
            </h2>
            <div className="columns">
              {/*<div className="column">*/}
              {/*  <Cards />*/}
              {/*</div>*/}
              {/*<div className="column">*/}
              {/*  <Cards />*/}
              {/*</div>*/}
              {/*<div className="column">*/}
              {/*  <Cards />*/}
              {/*</div>*/}
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;

import React from "react";

const Header = ({ dark }) => {
  return (
    <section className="section swell-header-base">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div className={dark ? "navbar-brand dark" : "navbar-brand"}>
                <a className="navbar-item" href={"/about"}>
                  <span>
                    <p>Shore up</p>
                  </span>
                </a>

                <a
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>

              <div className={dark ? "navbar-menu dark" : "navbar-menu"}>
                <div className="navbar-start swell-nav-start">
                  <a className="navbar-item" href={"/"}>
                    Home
                  </a>

                  <a className="navbar-item" href={"/campaigns"}>
                    All Campaigns
                  </a>

                  <a className="navbar-item" href={"/donate"}>
                    Donate
                  </a>
                  <a className="navbar-item" href={"/about"}>
                    About
                  </a>
                  <a className="navbar-item" href={"/contact"}>
                    Contact Us
                  </a>
                </div>

                <div className="navbar-end">
                  <a className="navbar-item" href={"/signIn"}>
                    Sign In
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

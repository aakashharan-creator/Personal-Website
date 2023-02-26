import React from "react";
import NavLink from "./NavLink";

export default function Navbar() {
    return (
      <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand">Aakash Haran</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <NavLink sectionTitle="Home" href="home" />
                        </li>
                      <li className="nav-item active">
                          <NavLink sectionTitle="About Me" href="about_me" />
                        </li>
                      <li className="nav-item active">
                          <NavLink sectionTitle="Experience" href="resume" />
                        </li>
                      <li className="nav-item active">
                          <NavLink sectionTitle="Projects" href="projects" />
                        </li>
                      <li className="nav-item active">
                          <NavLink sectionTitle="Contact" href="contact" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

import React from "react";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";

export default function NavLink(props) {
    return (
      <Nav className="mr-auto">
          <li className="nav-item">
              <Link
                  href={`#${props.href}`}
                  to={props.href}
                  activeClass="active"
                  className="nav-link"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  {props.sectionTitle}
                </Link>
            </li>
        </Nav>
    );
}

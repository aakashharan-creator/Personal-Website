import React, { useState, useEffect } from "react";
import { Typewriter as T } from "typewriter-effect/dist/core";
import Typewriter from "typewriter-effect";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import LogoRow from "./Contact/LogoRow";
import bg from "../assets/images/svg.png";

export default function Home() {
    const [isShown, setShown] = useState(false);
    const [aboutText, setAboutText] = useState("Hi, my name is Aakash and I'm...");

    const getLink = () => {
        if (isShown) {
            return (
                <Link
                style={{ paddingTop: "2%" }}
                href="#about_me"
                to="about_me"
                activeClass="active"
                className="nav-link"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                {/* <button class='btn btn-primary'>Learn More</button> */}
                {/* <i class="fa fa-4x fa-solid fa-angle-down"></i> */}
                <i className="fa fa-4x fa-solid fa-circle-chevron-up" />
              </Link>
            );
        }
        return null;
    };

    useEffect(() => {
        setTimeout(() => {
            setAboutText("Hi, my name is Aakash");
            setShown(true);
        }, 18500);
    });

    const sentences = [
        "<h1>an avid problem solver</h1>",
        "<h1>a software professional</h1>",
        "<h1>a tennis player</h1>",
        "<h1>a piano player</h1>",
        "<h1>a manga enthusiast :)</h1>",
        ""];

    return (
      <div className="home" style={{ height: "100vh", textAlign: "center"}}>
          <h1 style={{ paddingTop: "20%" }}>{aboutText}</h1>
          <Typewriter
              options={{
                    strings: sentences,
                    autoStart: true,
                    loop: false,
                    cursorClassName: "h1",
                    cursor: "",
                    pauseFor: 500,
                    delay: 60,
                }}
            />
          {getLink()}
        </div>
    );
}

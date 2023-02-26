/* eslint-disable */

import React from "react";
import LogoRow from "./LogoRow";

export default function Contact() {
    return (
        <div id="contact" style={{ padding: "3%", paddingTop: '10%', height: "100vh"}}>
            <div style={{ textAlign: "center", with: "70%" }}>
                <h1><b>Connect with me!</b></h1>
                <h4 style={{ paddingTop: "2%" }}>
                I'm a problem solver who creates innovative software solutions to solve business problems. I'm always down to work on
                interesting projects, so if you think I'm what you're looking for, feel free
                to contact me!
                </h4>
                <LogoRow />
          </div>
      </div>
    );
}

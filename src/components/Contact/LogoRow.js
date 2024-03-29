/* eslint-disable */

import React from "react";
import linkedinlogo from "../../assets/images/linkedinlogo.png";
import emaillogo from "../../assets/images/maillogo.jpg";
import locationlogo from "../../assets/images/locationlogo.png";

export default function LogoRow() {
    return (
        <div className="row-proj">
            <div className="column">
                <a className="logo" href="https://www.google.com/maps/place/Zachry+Engineering+Education+Complex/@30.6212406,-96.3425718,17z/data=!3m1!4b1!4m5!3m4!1s0x8646839426cc33e7:0x6817554b15f7f70d!8m2!3d30.6212406!4d-96.3403778" target="_blank" rel="noopener noreferrer">                    
                    <i className="fa fa-5x fa-solid fa-location-arrow" />
                </a>
            </div>
            <div className="column">
                <a className="logo" href="mailto:aakash.haran01@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-5x fa-solid fa-envelope" />
                </a>
            </div>
            <div className="column">
                <a className="logo" href="https://www.linkedin.com/in/aakash-haran/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-5x fa-brands fa-linkedin-in" />
                </a>
            </div>
            <div className="column">
                <a className="logo" href="https://github.com/aakashharan-creator" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-5x fa-brands fa-github" />
                </a>
            </div>
        </div>
    );
}

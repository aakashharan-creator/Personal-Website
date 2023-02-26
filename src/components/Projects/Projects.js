/* eslint-disable */


import React from "react";
import Project from "./Project";

export default function Projects() {
    const project1 = {
        title: "Python Debugger Module",
        description: "I created an MIT Licensed public debugging library to efficiently debug Python code \
        This module provided users with a collection of intuitive debugging tools to develop code and track execution",
        img: "https://www.pngitem.com/pimgs/m/31-312064_programming-icon-png-python-logo-512-transparent-png.png",
        url: "https://pypi.org/project/PythonDebuggerTools/",
    };

    const project2 = {
        title: "College Book Selling Platform",
        description: "I deployed a full stack PERN application on Heroku to allow college students to sell used college textbooks to each other",
        img: "https://cdn.pixabay.com/photo/2016/09/16/09/20/books-1673578_960_720.png",
        url: "https://github.com/aakashharan-creator/CollegeBooks",
    };

    const project3 = {
        title: "Stock Prediction Module",
        description: "I developed an LSTM Deep Learning model to predict the likelihood of a stock increasing with 85.7% accuracy",
        img: "https://www.kindpng.com/picc/m/78-788160_transparent-stock-market-icon-png-png-download.png",
        url: "https://github.com/aakashharan-creator/Stock-Model",
    };

    const project4 = {
        title: "Personal Website",
        description: "I developed a personal website with React.js and deployed it with Github Pages",
        img: "https://cdn.dribbble.com/users/2442115/screenshots/8699490/dec-01-2019_19-16-16.gif",
        url: "https://github.com/aakashharan-creator/Personal-Website",
    };

    const project5 = {
        title: "LeetCode",
        description: "A repository of some of the LeetCode problems I've solved",
        img: "https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png",
        url: "https://github.com/aakashharan-creator/LeetCode-Solutions",
    };

    return (
      <div style={{
            height: "auto", minHeight: "100vh", paddingTop: "5%", paddingBottom: "5%",
        }}
        >
          <h1 id="projects" style={{ paddingLeft: "5%" }}>Projects</h1>
          <div style={{ paddingLeft: "5%", textAlign: "center" }}>
              <div className="row">
                  <div className="column">
                      <Project project={project1} />
                    </div>
                  <div className="column">
                      <Project project={project2} />
                    </div>
                  <div className="column">
                      <Project project={project3} />
                    </div>
                </div>
              <div className="row">
                  <div className="column">
                      <Project project={project4} />
                    </div>
                </div>
            </div>
        </div>
    );
}

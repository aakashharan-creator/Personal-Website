import React from "react";
import { Chrono } from "react-chrono";
import WorkItem from "./WorkItem";

export default function WorkTimeline() {
    const item = {
        title: "Jan 2021 - Apr 2022",
        cardTitle: "RazorMetrics",
        url: "https://razormetrics.com/",
        cardSubtitle: "Data Analyst Intern - Remote",
        cardDetailedText: "While at RazorMetrics, I singlehandedly developed a novel, proprietary analysis module in the data pipeline to automate identification of \
        direct medication switches. I worked with Python, Tableau, and PostgreSQL",
        media: {
            type: "IMAGE",
            source: {
                url: "data:image/png;base64,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",
            },
        },
    };
    const item2 = {
        title: "May 2022 - Aug 2022",
        cardTitle: "Paycom",
        url: "https://www.paycom.com/",
        cardSubtitle: "Software Developer Intern - Grapevine, Texas",
        cardDetailedText: "At Paycom, I designed a data pipeline to scrape and filter web data to boost internal marketing resources. This \
    led to a projected savings of at least $950,000 for Paycom. I worked with Node.js, Puppeteer, and React. I designed, developed, and deployed \
    a data pipeline to scrape, filter, and transfer 10 gigabytes of prospective client data directly to the CRM, expanding the customer pipeline by \
    13% and saving $950,000 annually.\
    Conducted user testing and collaborated with a remote Agile engineering team to build, iterate, and deliver the data pipeline using Javascript, React.js, Node.js, Puppeteer, and Gitlab.",
        media: {
            type: "IMAGE",
            source: {
                url: "https://g.foolcdn.com/editorial/images/570365/paycom-logo.png",
            },
        },
    };

    const item3 = {
        title: "Sep 2022 - Jan 2023",
        cardTitle: "RazorMetrics",
        url: "https://razormetrics.com/",
        cardSubtitle: "Software Developer Intern - Remote",
        cardDetailedText: "To be announced!",
        media: {
            type: "IMAGE",
            source: {
                url: "data:image/png;base64,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",
            },
        },
    };

    const item4 = {
        title: "Jun 2023 - Aug 2023",
        cardTitle: "Charles Schwab",
        url: "https://www.schwab.com/",
        cardSubtitle: "Software Developer Intern - Westlake, Texas",
        cardDetailedText: "To be announced!",
        media: {
            type: "IMAGE",
            source: {
                url: "https://wetradehq.com/uploads/1534792352291220px-Charles_Schwab_Corporation_logo.svg.png",
            },
        },
    };

    const items = [item4, item3, item2, item];
    const texts = [
        {
            text: "To be announced!",
            impacts: ["To be announced!"],
            technologies: ["To be announced!"],
            readMore: false,
        },
        {
            text: "I developed a statistical model that predicted the likelihood of a medical prescription being accepted by a physician.",
            more: "I utilized Python and PostgreSQL to analyze thousands of rows of data in s relational database and create a model \
            that would profile prescibers to predict their decicision. This model was part of the company's effort to transition to \
            projects with artificical intelligence in an effort to make data-driven decisions.",
            impacts: ["Prediction Model"],
            technologies: ["Python", "PostgreSQL", "Pandas"],
            readMore: true,
        },
        {
            text: "At Paycom, I designed a data pipeline to scrape and filter web data to boost internal marketing resources. This \
            led to a projected savings of at least $950,000 for Paycom.",
            impacts: ["Projected $950,000 savings", "Boosted marketing resources by 15%", "Presented our project to the CIO"],
            technologies: ["Javascript", "Typescript", "React", "Puppeteer", "Express", "GitLab", "Agile"],
            more: "At Paycom, I designed, developed, and deployed a data pipeline to scrape, filter prospective client data and transfer information \
            directly to CRM. This project achieved a 13\% larger prospective client base, \$950,000 savings annually, and a dramatic cut down in time required.",
            readMore: true,
        },
        {
            text: "While at RazorMetrics, I singlehandedly developed a novel, proprietary analysis module in the data pipeline to automate identification of\
      direct medication switches.",
            more: "I had the opportunity to spearhead the development of a novel, proprietary analysis module in the data pipeline using Python to automate the\
             event identification which resulted  reducing processing time from 1 week to 3 hours.\
            I analyzed performance improvements, visualized results in Tableau, presented to the CTO and engineering team, \
            and secured buy-in as the first company project written in Python before an entire product refactoring project. \
            I completed this as the very first company project in Python, which later set the standards for the transition.",
            impacts: ["Automated a completely manual process", "Reduced time taken for identification by days"],
            technologies: ["Python", "PostgreSQL", "AWS", "Tableau", "BitBucket"],
            readMore: true,
        },
    ];

    return (
        <div style={{ margin: "auto", width: "75%", height: "auto" }}>
            <Chrono items={items} mode="VERTICAL" hideControls>
                {
                    texts.map((text) => <WorkItem item={text} />)
                }
          </Chrono>
      </div>
    );
}

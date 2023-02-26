import React, { useState } from "react";

function getButton(readMore, style, setStyle, btnText, setBtnText, lessText, moreText, setParaText) {
    if (readMore) {
        return (
            <button onClick={() => handleClick(style, setStyle, setBtnText, lessText, moreText, setParaText)} className="btn btn-outline-primary">
            {btnText}
          </button>
        );
    }
}

function handleClick(style, setStyle, setBtnText, lessText, moreText, setParaText) {
    if (style === "hide") {
        setStyle("show");
        setBtnText("Read Less");
        setParaText(moreText);
    } else {
        setStyle("hide");
        setBtnText("Read More");
        setParaText(lessText);
    }
}

export default function WorkItem(props) {
    const [style, setStyle] = useState("hide");
    const [btnText, setBtnText] = useState("Read More");
    const [paraText, setParaText] = useState(props.item.text)

    return (
      <div>
          <div className="">
              <p style={{ textAlign: "left" }}>{paraText}</p>
              <div className="container" className={style}>
                  <div className="row" style={{ padding: "5%" }}>
                      <div className="col-6">
                          <h3>Impact</h3>
                          <ul style={{ paddingTop: "3%" }}>
                              {
                                    props.item.impacts.map((impact) => <li>{impact}</li>)
                                }
                            </ul>
                        </div>
                      <div className="col-6">
                          <h3>Technologies</h3>
                          <ul style={{ paddingTop: "3%" }}>
                              {
                                    props.item.technologies.map((technology) => <li>{technology}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          <div style={{ textAlign: "right" }}>
              {
                    getButton(props.item.readMore, style, setStyle, btnText, setBtnText, props.item.text, props.item.more, setParaText)
                }
            </div>
        </div>
    );
}

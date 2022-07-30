import React from "react"
import { Chrono } from "react-chrono";

export default function EducationTimeline() {
  const item = {
    title: "August 2016 - November 2019",
    cardTitle: "The Indian Public School",
    url: "https://tipskovai.com/",
    cardSubtitle: "International Baccalaureate - Coimbatore, India",
    cardDetailedText: "I enrolled in Mathematics HL, Computer Science HL, Physics HL, English SL, French SL, and Business Management SL and attained 37/45 \
    in the International Baccalaureate program.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://www.eduvidya.com/admin/Upload/Schools/637023592313681818_The%20Indian%20Public%20School,%20Coimbatore.jpg"
      }
    }
  };
  const item2 = {
    title: "August 2020 - May 2024",
    cardTitle: "Texas A&M University",
    url: "https://www.tamu.edu/",
    cardSubtitle: "B.S. Computer Science - College Station, Texas",
    cardDetailedText: "I'm a Computer Science major at Texas A&M, planning to graduate in the spring of 2024 with a minor in statistics.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://indiaeducationdiary.in/wp-content/uploads/2020/12/standard.png"
      }
    }
  };
  const items = [item2, item];

  return (
    <div style={{ margin: 'auto', width: '70%', height: 'auto'}}>
      <Chrono items={items} mode={"VERTICAL"} hideControls={true}>
      </Chrono>
    </div>
  )
}
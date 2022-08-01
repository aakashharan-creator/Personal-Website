import React from "react"
import { Chrono } from "react-chrono";
import EducationItem from "./EducationItem";

export default function EducationTimeline() {
    const item = {
        title: "Aug 2016 - Nov 2019",
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
        title: "Aug 2020 - May 2024",
        cardTitle: "Texas A&M University",
        url: "https://www.tamu.edu/",
        cardSubtitle: "B.S. Computer Science - College Station, Texas",
        cardDetailedText: "I'm a Computer Science major at Texas A&M, planning to graduate in the spring of 2024 with a minor in statistics.",
        media: {
            /* The image that is displayed on the right side of the timeline. */
            type: "IMAGE",
            source: {
                url: "https://indiaeducationdiary.in/wp-content/uploads/2020/12/standard.png"
            }
        }
    };
    const items = [item2, item];

    const texts = [
        {
            text: 'I\'m a Computer Science major at Texas A&M, planning to graduate in the spring of 2024 with a minor in statistics and mathematics.',
            coursework: ['CSCE 121 - Introduction to Program Design and Concepts', 'CSCE 221 - Data Structures and Algorithms',
                        'CSCE 222 - Discrete Structures for Computing', 'CSCE 312 - Computer Organization', 'CSCE 313 - Introduction to Computer Systems',
                        'CSCE 314 - Programming Languages', 'CSCE 411 - Design and Analysis of Algorithms'],
            readMore: true
        },
        {
            text: 'I enrolled in Mathematics HL, Computer Science HL, Physics HL, English SL, French SL, and Business Management SL and attained 37/45 in the International Baccalaureate program.',
            coursework: [],
            technologies: [],
            readMore: false,
        },
    ]

    return (
        <div style={{ margin: 'auto', width: '70%', height: 'auto' }}>
            <Chrono items={items} mode={"VERTICAL"} hideControls={true}>
                {
                    texts.map(text => {
                        return <EducationItem item={text} />
                    })
                }
            </Chrono>
        </div>
    )
}
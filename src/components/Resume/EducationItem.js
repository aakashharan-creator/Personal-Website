import React, { useState } from 'react'

function getButton(readMore, style, setStyle, btnText, setBtnText) {
    if (readMore) {
        return <button onClick={() => handleClick(style, setStyle, setBtnText)} class='btn btn-outline-primary'>
            {btnText}
        </button>
    }
}

function handleClick(style, setStyle, setBtnText) {
    if (style === 'hide') {
        setStyle('show');
        setBtnText('Read Less');
    } else {
        setStyle('hide');
        setBtnText('Read More');
    }
}

export default function EducationItem(props) {
    const [style, setStyle] = useState('hide')
    const [btnText, setBtnText] = useState('Read More');

    return (
        <div>
            <div class=''>
                <p style={{ textAlign: 'left' }}>{props.item.text}</p>
                <div class='container' className={style}>
                    <div class='row' style={{ padding: '5%' }}>
                        <div class='col-8'>
                            <h3>Coursework</h3>
                            <ul style={{ paddingTop: '3%' }}>
                                {
                                    props.item.coursework.map(impact => {
                                        return <li>{impact}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'right' }}>
                {
                    getButton(props.item.readMore, style, setStyle, btnText, setBtnText)
                }
            </div>
        </div>
    )
}

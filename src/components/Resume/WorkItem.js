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

export default function WorkItem(props) {
    const [style, setStyle] = useState('hide')
    const [btnText, setBtnText] = useState('Read More');

    return (
        <div>
            <div class=''>
                <p style={{ textAlign: 'left' }}>{props.item.text}</p>
                <div class='container' className={style}>
                    <div class='row' style={{ padding: '5%' }}>
                        <div class='col-6'>
                            <h3>Impact</h3>
                            <ul style={{ paddingTop: '3%' }}>
                                {
                                    props.item.impacts.map(impact => {
                                        return <li>{impact}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div class='col-6'>
                            <h3>Technologies</h3>
                            <ul style={{ paddingTop: '3%' }}>
                                {
                                    props.item.technologies.map(technology => {
                                        return <li>{technology}</li>
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

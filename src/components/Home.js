import React from 'react'
import Typewriter from 'typewriter-effect';
import LogoRow from './Contact/LogoRow';


export default function Home() {
    const sentences = [ 
    '<h1>an avid coder</h1>', 
    '<h1>a tennis player</h1>', 
    '<h1>a veteran manga enthusiast</h1>', 
    '<h1>a piano player</h1>'];

    return (
        <div id='home' style={{ height: '100vh', textAlign: 'center' }}>
            {/* <h1 id='home' style={{ paddingLeft: '5%', top: '150px' }}>Home Page</h1> */}
            <h1 style={{paddingTop: '20%'}}>Hi, my name is Aakash and I'm...</h1>
            <Typewriter
                options={{
                    strings: sentences,
                    autoStart: true,
                    loop: true,
                    cursorClassName: 'h1',
                    cursor: ''
                }}
            />
        </div>
    )
}

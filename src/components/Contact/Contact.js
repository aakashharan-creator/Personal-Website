import React from 'react'
import LogoRow from './LogoRow'

export default function Contact() {
  return (
    <div id='contact' style={{ padding: '3%', height: '50vh', backgroundColor: '#B4B8AB' }}>
      <div style={{ textAlign: 'center' }}>
        <h1><b>Connect with me!</b></h1>
        <h3>I'm a passionate developer and I'm always down to work on
          interesting projects, so if you think I'm what you're looking for, feel free
          to contact me!
        </h3>
        <LogoRow />
      </div>
    </div>
  )
}

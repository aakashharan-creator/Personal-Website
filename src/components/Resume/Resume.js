import React from 'react'
import WorkTimeline from './WorkTimeline'
import EducationTimeline from './EducationTimeline'

export default function Resume() {
  return (
    <div>
      <h1 id='resume' style={{ height: '4vh', paddingLeft: '5%'}}>Work Experience</h1>
      <WorkTimeline />
      <h1 id='resume' style={{ height: '4vh', paddingLeft: '5%', paddingTop: '5%'}}>Education</h1>
      <EducationTimeline />
    </div>
  )
}

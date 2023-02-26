/* eslint-disable */
import VisibilitySensor from 'react-visibility-sensor';     
import React, { useRef, Component, useEffect, useState } from 'react';
import useOnScreen from './UseOnScreen';

// import React from 'react'

const Project = (props) => {
    // const ref = useRef()
    // const isVisible = useOnScreen(ref)

  return (
    <div>
        <div class="card hidden-animate" style={{ width: "18rem" }}>
            <img class="card-img-top" src={props.project.img} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.project.title}</h5>
                <p class="card-text">{props.project.description}</p>
                <a href={props.project.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary" disabled>View Project</a>
            </div>
        </div>
    </div>
  )
}

export default Project;

// export default class Project extends Component {
//     render() {
//         const props = this.props;
//         return (
//             <div class="card hidden-animate" style={{ width: "18rem" }}>
//                 <img class="card-img-top" src={props.project.img} alt="Card image cap" />
//                 <div class="card-body">
//                     <h5 class="card-title">{props.project.title}</h5>
//                     <p class="card-text">{props.project.description}</p>
//                     <a href={props.project.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary" disabled>View Project</a>
//                 </div>
//             </div>
//         )
//     }
// }
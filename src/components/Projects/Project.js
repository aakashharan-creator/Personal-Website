import React from 'react'

export default function Project(props) {
    return (
        <div class="card" style={{ width: "18rem"}}>
            <img class="card-img-top" src={props.project.img} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.project.title}</h5>
                <p class="card-text">{props.project.description}</p>
                <a href={props.project.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary" disabled>View Project</a>
            </div>
        </div>
    )
}

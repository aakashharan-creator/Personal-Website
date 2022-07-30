import React from 'react'
import Project from './Project'

export default function Projects() {
    return (
        <div style={{ height: '100vh' }}>
            <h1 id='projects' style={{ paddingLeft: '5%' }}>Projects</h1>
            <div style={{paddingLeft: '8%', border: '1px solid blue'}}>
                <div class="row">
                    <div class="column">
                        <Project />
                    </div>
                    <div class="column">
                        <Project />
                    </div>
                    <div class="column">
                        <Project />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

const Project = (props) => {
    return (
        <div className="project-container">
            <img src={props.image} />
            <div className="project-content" >
                <h>{props.title}</h><br/>
                <p>{props.description}</p>
                <i className={props.icon}></i> Written in {props.language}
            </div>
        </div>
    )
}

export default Project

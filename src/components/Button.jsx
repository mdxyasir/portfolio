import React from 'react'

const Button = (props) => {
    return (
        <a href={props.link} target="_blank" className="btn slide">
            <i className={props.icon}></i>
            {props.label}
        </a>
    )
}

export default Button

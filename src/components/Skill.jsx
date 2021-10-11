import React from 'react'

const Skill = (props) => {
    return (
        <div class="skill">
            <i class={props.icon}></i>
            {props.name}
            <p1 style={{float: 'right'}} >{props.percentage}</p1>
            <div class="skill-bar">
                <div style={{width: props.percentage}} class="percentage"></div>
            </div>
        </div>
    )
}

export default Skill

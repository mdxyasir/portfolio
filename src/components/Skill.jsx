import React from 'react'

const Skill = (props) => {
    return (
        <li>
            <i style={{fontSize: "32px", color: "#5E81AC"}} class={props.icon} />
            {props.name} - {props.level}
        </li>
    )
}

export default Skill

import React from 'react'

const Skill = (props) => {
    console.log(props.icon)
    return (
        <div className={props.className}>
            <i class={props.icon} />
            {props.name}
        </div>
    )
}

export default Skill
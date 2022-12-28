import React from 'react'

const Skill = (props) => {
    return (
        <div className={props.className}>
            <i class={props.icon} />
            {props.name}
        </div>
    )
}

export default Skill
import React from 'react'

const Project = (props) => {

    const { styles } = props;

    return (
        <div className={styles.project}>

            <img className={styles.image} src={ `./images/portfolio/${props.image}` } alt="Project Image"></img>

            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p1 className={styles.description}>{props.description}</p1>
                <p2 className={styles.language}>
                    <i className={props.icon} />
                    Written in {props.language}
                </p2>
            </div>

        </div>
    )
}

export default Project
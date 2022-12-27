import React from 'react'
import Skill from '../components/Skill'

import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <div className={styles.container}  >

        <h1 className='title'>My <span>Skills</span>.</h1>

        <div className={styles.skills}>
            <Skill name='Python' icon='fab fa-python' className={styles.skill} />
            <Skill name='JavaScript' icon='fab fa-js' className={styles.skill} />
            <Skill name='HTML' icon='fab fa-html5' className={styles.skill} />
            <Skill name='CSS' icon='fab fa-css3-alt' className={styles.skill} />
            <Skill name='Node.js' icon='fab fa-node-js' className={styles.skill} />
            <Skill name='React.js' icon='fab fa-react' className={styles.skill} />
            <Skill name='SQL' icon='fas fa-database' className={styles.skill} />
            <Skill name='UI Design' icon='fas fa-browser' className={styles.skill} />
        </div>

    </div>
  )
}

export default Skills
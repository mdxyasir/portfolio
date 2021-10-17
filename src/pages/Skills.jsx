import React from 'react'
import Skill from '../components/Skill'

const Skills = () => {
    return (
        <div class="about">
        <div class="container">
            <h1>Languages and Skills</h1>
            <br/>
            <div className="all-skills">
                <ul className="skills">

                    <Skill 
                        icon="fab fa-python"
                        name="Python"
                        level="Expert"
                    />

                    <Skill 
                        icon="fab fa-js"
                        name="Javascript"
                        level="Strong"
                    />

                    <Skill 
                        icon="fab fa-react"
                        name="React"
                        level="Proficient"
                    />

                    <Skill
                        icon="fab fa-vuejs"
                        name="Vue"
                        level="Beginner"
                    />

                </ul>

                <ul className="skills">

                    <Skill 
                        icon="fab fa-html5"
                        name="HTML"
                        level="Expert"
                    />

                    <Skill 
                        icon="fab fa-css3-alt"
                        name="CSS"
                        level="Strong"
                    />

                    <Skill
                        icon="fab fa-bootstrap"
                        name="Bootstrap"
                        level="Proficient"
                    />

                    <Skill
                        icon="fas fa-browser"
                        name="UI Design"
                        level="Beginner"
                    />

                </ul>
            </div>
        </div>
        </div>
    )
}

export default Skills

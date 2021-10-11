import React from 'react'
import Skill from '../components/Skill'

const About = () => {
    return (
        <div class="about">
        <div class="container">
            <h1>Languages and Skills</h1>
            <br/>

            <Skill 
                icon="fab fa-python"
                name="Python"
                percentage="80%"
            />

            <Skill 
                icon="fab fa-js"
                name="Javascript"
                percentage="60%"
            />

            <Skill 
                icon="fab fa-react"
                name="React"
                percentage="40%"
            />

            <Skill 
                icon="fab fa-html5"
                name="HTML"
                percentage="95%"
            />

            <Skill 
                icon="fab fa-css3"
                name="CSS"
                percentage="70%"
            />
            
        </div>
        </div>
    )
}

export default About

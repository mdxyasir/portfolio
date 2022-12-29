import React from 'react'
import Project from '../components/Project'

import styles from '../styles/Portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={styles.container}>

        <h1 className='title'>My <span>Portfolio</span>.</h1>

        <div className={styles.projects}>

            <Project
                title='Nitro Design'
                image='nitro-design.png'
                description="A Discord bot for the 10,000+ member community, Nitro Design. It features a marketplace, a starboard, and an application system for skilled roles."
                language='JavaScript'
                icon='fab fa-js'

                styles={styles}
            />

            <Project
                title='Simple Weather App'
                image='weather-app.png'
                description="A simple and easy-to-use weather app coded with Electron. Retrieve the weather of any country or city using the search bar at the top of the app."
                language='JavaScript'
                icon='fab fa-js'

                styles={styles}
            />

        </div>


    </div>
  )
}

export default Portfolio
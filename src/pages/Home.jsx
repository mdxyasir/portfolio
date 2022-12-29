import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>

        <h1>Hello, I'm <span>Yasir</span>.</h1>
        <h2 className={styles.text}>Artist. Programmer. Student.</h2>

        <Link to='portfolio' className={styles.contact}>View My Work</Link>

        <div className={styles.links}>
            <a 
                href='https://github.com/mdxyasir'
                target='_blank'
                rel='noreferrer'
            ><i className='fab fa-github'></i></a>

            <a
                href='mailto:hello@mdxyasir.com'
                target='_blank'
                rel='noreferrer'
            ><i className='fas fa-envelope'></i></a>

            <a
                href='https://deviantart.com/mdxyasir'
                target='_blank'
                rel='noreferrer'
            ><i className='fab fa-deviantart'></i></a>
        </div>

    </div>
  )
}

export default Home
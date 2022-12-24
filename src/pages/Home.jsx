import React from 'react'

import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>

        <h1 className={styles.title}>Hello, I'm <span>Yasir</span>.</h1>
        <h2 className={styles.text}>Artist. Programmer. Student.</h2>

        <a
            href='mailto:hello@mdxyasir.com'
            target='_blank'
            rel='noreferrer'
            className={styles.contact}
        >
            Contact Me
        </a>

    </div>
  )
}

export default Home
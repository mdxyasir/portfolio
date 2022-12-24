import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/Navigation.module.css'

const Navigation = () => {
  return (
	<div className={styles.navigation}>
		<div className={styles.container}>

			<h2 className={styles.title}>mdxyasir<span>.</span></h2>
            
			<div className={styles.links}>
				<Link className={styles.link} to=''>Home</Link>
				<Link className={styles.link} to='skills'>Skills</Link>
				<Link className={styles.link} to='portfolio'>Portfolio</Link>
			</div>

		</div>
	</div>
  )
}

export default Navigation
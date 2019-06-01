import React from "react"
import { Link } from "gatsby"

import styles from "./secondary-navigation.module.scss"

const SecondaryNavigation = () => {
    return (
        <div className={styles.secondaryNav}>
        <span>Other links:</span>
        <Link to="/blog" activeClassName={styles.active}>
            Blog
        </Link>
        <Link to="/about" activeClassName={styles.active}>
            About
        </Link>
        </div>
    )
}

export default SecondaryNavigation
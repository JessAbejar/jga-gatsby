import React from "react"
import { Link } from "gatsby"

import styles from "./secondary-navigation.module.scss"

const SecondaryNavigation = () => {
    return (
        <div className={styles.secondaryNav}>
        <span>Other links:</span>
        <Link to="/blog">
            Blog
        </Link>
        <Link to="/about">
            About
        </Link>
        <Link to="/about">
            Contact
        </Link>
        </div>
    )
}

export default SecondaryNavigation
import React from "react"
import { Link } from "gatsby"

import styles from "./secondary-navigation.module.scss"

const SecondaryNavigation = () => {
    return (
        <div id="secondaryNavigation" className={styles.secondaryNav}>
            <span>Other links:</span>
            <div>
                <Link to="/blog" activeClassName={styles.active}>
                    Blog
                </Link>
                <Link to="/about" activeClassName={styles.active}>
                    About
                </Link>
            </div>
        </div>
    )
}

export default SecondaryNavigation
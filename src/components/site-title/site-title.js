import React from "react"
import { Link } from "gatsby"

import styles from "./site-title.module.scss"

const SiteTitle = () => {
    return (
      <Link to="/" className={styles.siteTitle}>
        <span>Jessica G. Abejar</span>
      </Link>
    )
}

export default SiteTitle
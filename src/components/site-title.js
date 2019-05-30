import React from "react"
import { Link } from "gatsby"

import Styles from "./site-title.module.scss"

const SiteTitle = () => {
    return (
      <Link to="/" className={Styles.siteTitle}>
        <span>Jessica G. Abejar</span>
      </Link>
    )
}

export default SiteTitle
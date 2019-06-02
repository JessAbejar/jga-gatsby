import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styles from "./site-title.module.scss"

const SiteTitle = () => {
    const data = (useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `))

    return (
        <Link to="/" className={styles.siteTitle}>
            <span>{data.site.siteMetadata.title}</span>
        </Link>
    )
}

export default SiteTitle
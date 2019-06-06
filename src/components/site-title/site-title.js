import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import logo from "../../images/icon.png"

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
            {data.site.siteMetadata.title}
            <figure>
                <img src={logo} alt="" className={styles.logo}/>
            </figure>
        </Link>
    )
}

export default SiteTitle
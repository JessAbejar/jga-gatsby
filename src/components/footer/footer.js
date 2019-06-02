import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./footer.module.scss"

const Footer = () => {
    const data = (useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }      
    `))
    
    return (
        <footer>
            <small className={styles.footerText}>
                {data.site.siteMetadata.author} | Copyright 2019
            </small>
        </footer>
    )
}

export default Footer
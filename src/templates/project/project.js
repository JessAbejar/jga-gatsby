import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"

import styles from "./project.module.scss"

const Project = () => {
    return (
        <Layout>
            <SEO title="Projects" />
            <article>
                <h1 className={styles.pageTitle}>Projects</h1>
                <p>Please come back at another time to take a look at the process for putting together my projects!</p>
            </article>
        </Layout>
    )
}

export default Project
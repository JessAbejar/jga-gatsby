import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import styles from "./404.module.scss"

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404 Page Not Found" />
            <article>
                <h1 className={styles.pageTitle}>Whoops!</h1>
                <p>It looks like the page you are looking for does not exist!</p>
                <Link to="/" className={styles.return}>&#8592; Return to the Homepage</Link>
            </article>
        </Layout>
    )
}

export default NotFoundPage
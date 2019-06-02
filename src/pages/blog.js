import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import styles from "./blog.module.scss"

const BlogPage = () => {
    return(
        <Layout>
            <SEO title="Blog" />
            <h1 className={styles.pageTitle}>Blog</h1>
            <p>Please come back another time to read some blog posts!</p>
        </Layout>
    )
}

export default BlogPage
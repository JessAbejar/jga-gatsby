import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"

const EventsPage = () => {
    const data = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Events" } }) {
                frontmatter {
                    title
                }
                html
            }
            pageAsideJson ( page : { eq: "events"} ) {
                aside {
                    heading
                    items {
                        title
                        description
                    }
                }
            }
        }
    `))

    return (
        <Layout>
            <SEO title="Events" />
            <main id="main">
                <ArticleSection 
                    title={data.markdownRemark.frontmatter.title}
                    color="var(--events)"
                    content={data.markdownRemark.html}
                />
                <AsideSection 
                    aside={data.pageAsideJson.aside}
                    color="var(--events)"
                />
            </main>
        </Layout>
    )
}

export default EventsPage
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"
import ConnectSection from "../components/connect/connect"
import { connectIcons } from "../components/connect/connect-icons"

const DancePage = () => {
    const data = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Dance" } }) {
                frontmatter {
                    title
                }
                html
            }
            pageAsideJson ( page : { eq: "dance"} ) {
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
            <SEO title="Dance" />
            <main id="main">
                <ArticleSection 
                    title={data.markdownRemark.frontmatter.title}
                    color="var(--dance)"
                    content={data.markdownRemark.html}
                />
                <AsideSection 
                    aside={data.pageAsideJson.aside}
                    color="var(--dance)"
                />
                <ConnectSection
                    links={connectIcons.dance.links} 
                    color="var(--dance)"
                />
            </main>
        </Layout>
    )
}

export default DancePage
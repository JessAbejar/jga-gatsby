import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"
import ConnectSection from "../components/connect/connect"
import { connectIcons } from "../components/connect/connect-icons"


const TechPage = () => {
    const data = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Tech" } }) {
                frontmatter {
                    title
                }
                html
            }
            pageAsideJson ( page : { eq: "tech"} ) {
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
            <SEO title="Tech" />
            <main id="main">
                <ArticleSection 
                    title={data.markdownRemark.frontmatter.title}
                    color="var(--tech)"
                    content={data.markdownRemark.html}
                />
                <AsideSection 
                    aside={data.pageAsideJson.aside}
                    color="var(--tech)"
                />
                <ConnectSection
                    links={connectIcons.tech.links} 
                    color="var(--tech)"
                />
            </main>
        </Layout>
    )
}

export default TechPage
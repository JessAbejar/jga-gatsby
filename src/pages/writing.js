import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"
import WorkCards from "../components/work/work-cards"

const WritingPage = () => {
    const data = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Writing" } }) {
                frontmatter {
                    title
                }
                html
            }
            pageAsideJson ( page : { eq: "writing"} ) {
                aside {
                    heading
                    items {
                        title
                        description
                    }
                }
            }
            allMarkdownRemark ( filter: { frontmatter: { type: { eq: "writing-card"} } }) {
                edges {
                  node {
                    frontmatter {
                      title
                      image {
                        publicURL
                      }
                      image_description
                      description
                    }
                    html
                  }
                }
            }
        }
    `))

    return (
        <Layout>
            <SEO title="Writing" />
            <main id="main">
                <ArticleSection 
                    title={data.markdownRemark.frontmatter.title}
                    color="var(--writing)"
                    content={data.markdownRemark.html}
                />
                <AsideSection 
                    aside={data.pageAsideJson.aside}
                    color="var(--writing)"
                />
                <WorkCards 
                    title="Writing Samples"
                    color="var(--writing)"
                    items={data.allMarkdownRemark.edges}
                />
            </main>
        </Layout>
    )
}

export default WritingPage
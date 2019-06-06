import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"
import WorkCards from "../components/work/work-cards"

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
            allMarkdownRemark ( 
                filter: { frontmatter: { type: { eq: "events-card"} } }
                sort: { fields : [frontmatter___content_order], order: ASC}
            ) {
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
            <SEO title="Events" />
            <ArticleSection 
                title={data.markdownRemark.frontmatter.title}
                color="var(--events)"
                content={data.markdownRemark.html}
            />
            <AsideSection 
                aside={data.pageAsideJson.aside}
                color="var(--events)"
            />
            <WorkCards 
                title="Portfolio"
                color="var(--events)"
                items={data.allMarkdownRemark.edges}
            />
        </Layout>
    )
}

export default EventsPage
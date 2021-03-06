import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"
import WorkCards from "../components/work/work-cards"
import ConnectSection from "../components/connect/connect"
import { connectIcons } from "../components/connect/connect-icons"

const WellnessPage = () => {
    const data = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Wellness" } }) {
                frontmatter {
                    title
                }
                html
            }
            pageAsideJson ( page : { eq: "wellness"} ) {
                aside {
                    heading
                    items {
                        title
                        description
                    }
                }
            }
            allMarkdownRemark ( 
                filter: { frontmatter: { type: { eq: "wellness-card"} } }
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
            <SEO title="Wellness" />
            <ArticleSection 
                title={data.markdownRemark.frontmatter.title}
                color="var(--wellness)"
                content={data.markdownRemark.html}
            />
            <AsideSection 
                aside={data.pageAsideJson.aside}
                color="var(--wellness)"
            />
            <WorkCards 
                title="Formats"
                color="var(--wellness)"
                items={data.allMarkdownRemark.edges}
            />
            <ConnectSection
                links={connectIcons.wellness.links} 
                color="var(--wellness)"
            />
        </Layout>
    )
}

export default WellnessPage
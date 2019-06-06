import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"
import WorkCards from "../components/work/work-cards"
import WorkVideos from "../components/work/work-videos"

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
            card: allMarkdownRemark ( 
                filter: { frontmatter: { type: { eq: "writing-card"} } }
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
            video: allMarkdownRemark ( 
                filter: { frontmatter: { type: { eq: "writing-video-card"} } }
                sort: { fields : [frontmatter___content_order], order: ASC}
            ) {
                edges {
                  node {
                    frontmatter {
                      title
                      year_created
                      by
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
                items={data.card.edges}
            />
            <WorkVideos
                title="Performance Samples"
                color="var(--writing)"
                items={data.video.edges}
            />
        </Layout>
    )
}

export default WritingPage
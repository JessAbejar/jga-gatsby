import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"
import WorkSpotlight from "../components/work/work-spotlight"
import WorkVideos from "../components/work/work-videos"
import ConnectSection from "../components/connect/connect"
import { connectIcons } from "../components/connect/connect-icons"

const DancePage = () => {
    const data = (useStaticQuery(graphql`
        query {
            article: markdownRemark ( frontmatter : { title: { eq: "Dance" } }) {
                frontmatter {
                    title
                }
                html
            }
            aside: pageAsideJson ( page : { eq: "dance"} ) {
                aside {
                    heading
                    items {
                        title
                        description
                    }
                }
            }
            spotlight: markdownRemark (frontmatter : { type : {eq: "dance-spotlight"}}) {
                frontmatter {
                  title
                  image {
                    publicURL
                  }
                  logo {
                      publicURL
                  }
                  image_description
                  role 
                  description
                }
            }
            videos: allMarkdownRemark ( 
                filter: { frontmatter: { type: { eq: "dance-video-card"} } }
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
            <SEO title="Dance" />
            <ArticleSection 
                title={data.article.frontmatter.title}
                color="var(--dance)"
                content={data.article.html}
            />
            <AsideSection 
                aside={data.aside.aside}
                color="var(--dance)"
            />
            <WorkSpotlight
                color="var(--dance)"
                spotlight={data.spotlight}
            >
                <a href="https://themovingprayer.com" target="_blank" rel="noopener noreferrer">
                    Learn more on The Moving Prayer website
                </a> 
            </WorkSpotlight>
            <WorkVideos
                title="Performance Samples"
                color="var(--dance)"
                items={data.videos.edges}
            />
            <ConnectSection
                links={connectIcons.dance.links} 
                color="var(--dance)"
            />
        </Layout>
    )
}

export default DancePage
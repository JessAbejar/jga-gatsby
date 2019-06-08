import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import AsideSection from "../components/aside/aside"
import ConnectSection from "../components/connect/connect"
import WorkSpotlight from "../components/work/work-spotlight"
import TechCards from "../components/work/tech-cards"
import { connectIcons } from "../components/connect/connect-icons"


const TechPage = () => {
    const data = (useStaticQuery(graphql`
        query {
            article: markdownRemark ( frontmatter : { title: { eq: "Tech" } }) {
                frontmatter {
                    title
                }
                html
            }
            aside: pageAsideJson ( page : { eq: "tech"} ) {
                aside {
                    heading
                    items {
                        title
                        description
                    }
                }
            }
            spotlight: markdownRemark (frontmatter : { type : {eq: "tech-spotlight"}}) {
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
            cards: allMarkdownRemark ( 
                filter: { frontmatter: { type: { eq: "tech-project"} } }
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
                            main_skills
                            description
                            website
                            source
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `))

    return (
        <Layout>
            <SEO title="Tech" />
            <ArticleSection 
                title={data.article.frontmatter.title}
                color="var(--tech)"
                content={data.article.html}
            />
            <AsideSection 
                aside={data.aside.aside}
                color="var(--tech)"
            />
            <WorkSpotlight
                color="var(--tech)"
                spotlight={data.spotlight}
            >
                <Link to="/tech/mothercoders" style={{ color: "var(--tech)" }}>
                    Read more about my experience with MotherCoders
                </Link>
            </WorkSpotlight>
            <TechCards 
                title="Portfolio"
                items={data.cards.edges}
            />
            <ConnectSection
                links={connectIcons.tech.links} 
                color="var(--tech)"
            />
        </Layout>
    )
}

export default TechPage
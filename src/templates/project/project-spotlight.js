import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"

import styles from "./project-spotlight.module.scss"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug } }) {
            frontmatter {
                title
                role
                description
                image {
                    publicURL
                }
                image_description
            }
            html
        }
    }
`

const ProjectSpotlight = (props) => {
    return (
        <Layout>
            <SEO title={props.data.markdownRemark.frontmatter.title} />
            <article>
                <hgroup>
                    <h1 className={styles.pageTitle}>{props.data.markdownRemark.frontmatter.title}</h1>
                    <h2 className={styles.headingLarge}>{props.data.markdownRemark.frontmatter.role}</h2>
                </hgroup>
                <p>{props.data.markdownRemark.frontmatter.description}</p>
                <img 
                    src={props.data.markdownRemark.frontmatter.image.publicURL}
                    alt={props.data.markdownRemark.frontmatter.image_description}
                />
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} className={styles.spotlightContent}/>
            </article>
        </Layout>
    )
}

export default ProjectSpotlight
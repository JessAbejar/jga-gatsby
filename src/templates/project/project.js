import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"

import styles from "./project.module.scss"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug } }) {
            frontmatter {
                title
                description
                main_skills
                other_skills
                website
                source
                image {
                    publicURL
                }
                image_description
            }
            html
        }
    }
`

const Project = (props) => {
    return (
        <Layout>
            <SEO title={props.data.markdownRemark.frontmatter.title}/>
            <article>
                <h1 className={styles.pageTitle}>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.description}</p>
                <ul className={styles.skillsList}>
                    <li>
                        <strong>Main Skills</strong>: {props.data.markdownRemark.frontmatter.main_skills}
                    </li>
                    <li>
                        <strong>Other Skills</strong>: {props.data.markdownRemark.frontmatter.other_skills}
                    </li>
                </ul>
                <img 
                    src={props.data.markdownRemark.frontmatter.image.publicURL}
                    alt={props.data.markdownRemark.frontmatter.image_description}
                />
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} className={styles.projectContent}/>
            </article>
        </Layout>
    )
}

export default Project
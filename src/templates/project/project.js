import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"
import Img from "gatsby-image"

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
                    childImageSharp {
                        fluid(maxWidth: 720) {
                            ...GatsbyImageSharpFluid
                        }
                    }
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
                <div className={styles.linkIcons}>
                    <a href={props.data.markdownRemark.frontmatter.website}>Live Website</a> • <a href={props.data.markdownRemark.frontmatter.source}>Source Code</a>
                </div>
                <p>{props.data.markdownRemark.frontmatter.description}</p>
                <ul className={styles.skillsList}>
                    <li>
                        <strong>Main Skills &amp; Tools</strong>: {props.data.markdownRemark.frontmatter.main_skills}
                    </li>
                    <li>
                        <strong>Other Skills &amp; Tools</strong>: {props.data.markdownRemark.frontmatter.other_skills}
                    </li>
                </ul>
                <Img 
                    fluid={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid}
                    alt={props.data.markdownRemark.frontmatter.image_description}
                />
                <section dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} className={styles.projectContent}/>
                <aside>
                    <h2 className={styles.pageTitle}>{props.data.markdownRemark.frontmatter.title}</h2>
                    <div className={styles.linkIcons}>
                        <a href={props.data.markdownRemark.frontmatter.website}>Live Website</a> • <a href={props.data.markdownRemark.frontmatter.source}>Source Code</a>
                    </div>
                    <Img 
                    fluid={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid}
                    alt={props.data.markdownRemark.frontmatter.image_description}
                    />
                </aside>
            </article>
        </Layout>
    )
}

export default Project
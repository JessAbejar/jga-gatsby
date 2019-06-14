import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"

import styles from "./project.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


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
                <div className={styles.linkIcons}>
                    <FontAwesomeIcon icon={faLink} aria-hidden="true" /> 
                    <a href={props.data.markdownRemark.frontmatter.website}>
                        Live Website
                    </a>
                    <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> 
                    <a href={props.data.markdownRemark.frontmatter.source}>
                        Source Code
                    </a>
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
                <figure>
                    <img 
                        src={props.data.markdownRemark.frontmatter.image.publicURL}
                        alt={props.data.markdownRemark.frontmatter.image_description}
                    />
                </figure>
                <section dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} className={styles.projectContent}/>
                <aside>
                    <h2 className={styles.pageTitle}>{props.data.markdownRemark.frontmatter.title}</h2>
                    <div className={styles.linkIcons}>
                        <FontAwesomeIcon icon={faLink} aria-hidden="true" /> 
                        <a href={props.data.markdownRemark.frontmatter.website}>
                            Live Website
                        </a>
                        <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> 
                        <a href={props.data.markdownRemark.frontmatter.source}>
                            Source Code
                        </a>
                    </div>
                    <figure>
                        <img 
                            src={props.data.markdownRemark.frontmatter.image.publicURL}
                            alt={props.data.markdownRemark.frontmatter.image_description}
                        />
                    </figure>
                </aside>
            </article>
        </Layout>
    )
}

export default Project
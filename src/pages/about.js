import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Img from "gatsby-image"
import ConnectSection from "../components/connect/connect"
import { connectIcons } from "../components/connect/connect-icons"

import styles from "./about.module.scss"

const AboutPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="About" />
            <article id="mainArticle">
                <h1 className={styles.pageTitle}>About Me</h1>
                <hgroup>
                    <h2 className={styles.headingLarge}>Hello, my name is Jessica!</h2>
                    <h3 className={styles.headingMedium}>I am a multipotentialite, which means I do a little bit of a lot of things.</h3>
                </hgroup>
                <figure className={styles.illustration}>
                    <Img
                        fluid={data.file.childImageSharp.fluid}
                        alt="Illustration of Jessica G. Abejar by Julianne Abejar."
                    />
                </figure>
                <p>Being <strong>creative but also analytical</strong> led me to graduating at the top of my business class, dancing across the seas, 
                    making my childhood dreams come true in Brazil, organizing events in the local Filipino-American community, 
                    and sharing my passions with others around the world.</p>
                <p>After a plethora of dance gigs, a desk job, some conferences, a monthly newspaper column, 
                    weekly night classes, a handful of online courses, and a few new career additions along the way, I realized <strong>my 
                    mission wasn't necessarily about what I do but how I live my life</strong>. My mission is not only about  <strong>sharing 
                    my own unique story with others but also about helping others share theirs</strong>.</p>
            </article>
            <ConnectSection links={connectIcons.about.links} color="var(--primary)" />
        </Layout>
    )
}

export default AboutPage

export const query = graphql`
    query {
        file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
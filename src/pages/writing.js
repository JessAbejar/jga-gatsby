import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"

/*const data = {
    main: {
        title: "Writing",
        content: {
            __html: "<p>Writing has been one of my earliest passions in life, shaping the artist and storyteller I am today. Through writing, I hope to tell untold stories, illustrate different perspectives, educate anyone about anything, and most importantly, connect with people. Throughout my academic career I had received many writing awards, including the Respect Life Youth Contest in Poetry and in Playwriting, the Respect for Life Speech Contest, and the Sister Francis Dolores Covella Award for Research Writing. During my college career, I worked as a writing tutor and interned as an Editorial Intern for UniPro - Pilipino American Unity for Progress, fact-checking, editing, and co-authoring policy memos across a vast range of topics ahead of the 2010 presidential election. In recent years, I have written dance reviews for shows throughout the New York City area and currently author a youth column for The Filipino Catholic, a monthly newspaper for the Filipino-American Catholic community.</p>"
        }
    }, 
    aside: {
        heading: "Academic & Career Highlights",
        items: [
            {
                title: "Sister Francis Dolores Covella Award for Research Writing",
                description: "College of Mount Saint Vincent",
            },
            {
                title: '"I Am, ver 2.1" - a poem',
                description: "Written for & Performed at TAGALOGUE, Nuyorican Poets Cafe, New York, NY, October 2012",
            },
            {
                title: "Youth Columnist",
                description: "The Filipino Catholic",
            },
            {
                title: "Dance Writer",
                description: "BroadwayWorld.com",
            },
        ]
    },
}*/

const WritingPage = () => {
    const articleData = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Writing" } }) {
                frontmatter {
                    title
                }
                html
            }
        }
    `))

    return (
        <Layout>
            <SEO title="Writing" />
            <ArticleSection 
                title={articleData.markdownRemark.frontmatter.title}
                color="var(--writing)"
                content={articleData.markdownRemark.html}
            />
        </Layout>
    )
}

export default WritingPage
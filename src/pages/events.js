import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"

/*const data = {
    main: {
        title: "Events",
        content: {
            __html: "<p>I love doing project-based work, and working on producing well-executed events yet incredibly creative events has always been a passion of mine. I have been interested in events since I was a child, watching my family throw parties for our birthdays, our youth group, and even producing concerts. In addition to assisting my family with many events, I spent a large part of my college career producing many events including Open Mic, the largest event on campus. As President of FLOW, the Poetry and Spoken Word Club, I led a creative advertising campaign that attracted even more attendees and introduced Outdoor Open Mic, leading our Executive Board to its second consecutive honor as Organization of the Year.</p><p>After spending years attending and presenting at conferences and other large scale events, I went back to school to obtain a Professional Diploma in Meeting and Convention Management at New York University's School of Professional Studies. I later worked as an Events Consultant with Dominican Youth Movement USA (an organization whose conferences I previously presented at) and introduced and produced the Santacruzan, a traditional event for the Filipino-American community of Long Island.</p>"
        }
    }, 
    aside: {
        heading: "Education & Awards",
        items: [
            {
                title: "Professional Diploma in Meeting and Convention Management",
                description: "New York University's School of Professional Studies",
            },
            {
                title: "Organization of the Year",
                description: "FLOW, Poetry and Spoken Word Club, at the College of Mount Saint Vincent",
            },
            {
                title: "Student Organization Community Service Award",
                description: "FLOW's Flashlight Vigil, event raising awareness and funds for suicide prevention",
            },
        ]
    },
}*/

const EventsPage = () => {
    const articleData = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Events" } }) {
                frontmatter {
                    title
                }
                html
            }
        }
    `))

    return (
        <Layout>
            <SEO title="Events" />
            <ArticleSection 
                title={articleData.markdownRemark.frontmatter.title}
                color="var(--events)"
                content={articleData.markdownRemark.html}
            />
        </Layout>
    )
}

export default EventsPage
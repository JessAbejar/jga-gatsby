import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import ConnectSection from "../components/connect/connect"
import { connectIcons } from "../components/connect/connect-icons"


/*const data = {
    main: {
        title: "Wellness",
        content: {
            __html: "<p>A love for movement and a change in lifestyle led me to wellness. After realizing the importance of physical wellbeing along with mental and spiritual wellbeing. I began to pursue a path in wellness becoming a Group Fitness Instructor and later becoming a certified in Personal Training through the American Council on Exercise. I became certified in teaching POP Pilates, the very format that got me into fitness. I have taught for various gyms, studios, and community-based organizations including 24 Hour Fitness, The Fit NYC, Jazzercise Huntington, CNYC Fit, and Boutique Fitness.</p>"
        }
    }, 
    aside: {
        heading: "Certifications",
        items: [
            {
                title: "Certified Group Fitness Instructor",
                description: "American Council on Exercise",
            },
            {
                title: "Certified Personal Trainer",
                description: "American Council on Exercise",
            },
            {
                title: "Certified POP Pilates Instructor",
                description: "POP Pilates",
            },
            {
                title: "Heartsaver First Aid Infant/Child/Adult CPR/AED",
                description: "American Heart Association",
            },
        ]
    }
}*/

const WellnessPage = () => {
    const articleData = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Wellness" } }) {
                frontmatter {
                    title
                }
                html
            }
        }
    `))

    return (
        <Layout>
            <SEO title="Wellness" />
            <ArticleSection 
                title={articleData.markdownRemark.frontmatter.title}
                color="var(--wellness)"
                content={articleData.markdownRemark.html}
            />
            <ConnectSection
                links={connectIcons.wellness.links} 
                color="var(--wellness)"
            />
        </Layout>
    )
}

export default WellnessPage
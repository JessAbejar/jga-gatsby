import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ArticleSection from "../components/article/article"
import ConnectSection from "../components/connect/connect"
import { connectIcons } from "../components/connect/connect-icons"

/*const data = {
    main: {
        title: "Dance",
        content: {
            __html: "<p>Dance has always been an integral part of my life, allowing me to fulfill some lifelong dreams. I've trained in various styles of dance from ballet to hip hop, Filipino folk dance to modern and contemporary dance. I began choreographing and performing since a young age and have been privileged to share my gift and love for dance across the world.</p><p>I have worked in various roles in the field and have previously worked at Alvin Ailey Dance Foundation as an arts administrator, BroadwayWorld.com  as a dance writer, and Disney Cruise Lines as a performer before starting my own sacred dance company The Moving Prayer. I was also chosen as one of nine emerging leaders in the U.S. dance filed to participate in Dance/USA's Institute of Leadership Training, where I was mentored by American sacred dance pioneer Carla de Sola.</p>"
        }
    }, 
    aside: {
        heading: "Career Highlights",
        items: [
            {
                title: "Emerging Leader and Mentee",
                description: "Dance/USA's Institute of Leadership Training (DILT), 2016 Cohort",
            },
            {
                title: "Main Presenter",
                description: "Santo Niño Parish Youth Day 2018, Lipa City, Batangas, Philippines",
            },
            {
                title: "Festival Performer",
                description: "World Youth Day 2013, Rio de Janeiro, Brazil",
            },
            {
                title: "Festival Performer",
                description: "World Youth Day 2016, Kraków, Poland",
            },
            {
                title: "Featured Mainstage Performer",
                description: "National Conference on Catholic Youth Ministry 2016, San Jose, California",
            },
            {
                title: "Archdiocesan Dance Troupe Coordinator (2014-2016), Mainstage Guest Performer (2015), Co-Host (2016), and Assistant Stage Manager (2017)",
                description: "New York Catholic Youth Day, Yonkers, NY",
            },
            {
                title: "Conference Presenter and Lecturer",
                description: "Sacred Dance Guild Festival 2015, Erie, Pennsylvania",
            },
            {
                title: "Trainee",
                description: "Gibney Dance's Institute of Community Action Training, January 2016 Cohort",
            },
        ]
    }
}*/

const DancePage = () => {
    const articleData = (useStaticQuery(graphql`
        query {
            markdownRemark ( frontmatter : { title: { eq: "Dance" } }) {
                frontmatter {
                    title
                }
                html
            }
        }
    `))

    return (
        <Layout>
            <SEO title="Dance" />
            <ArticleSection 
                title={articleData.markdownRemark.frontmatter.title}
                color="var(--dance)"
                content={articleData.markdownRemark.html}
            />
            <ConnectSection
                links={connectIcons.dance.links} 
                color="var(--dance)"
            />
        </Layout>
    )
}

export default DancePage
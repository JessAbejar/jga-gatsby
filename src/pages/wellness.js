import React from "react"

import Page from "../templates/page"
import ConnectSection from "../components/connect"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const data = {
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
    },
    links: [
        {
            url: "https://instagram.com/jessdoeswellness",
            label: "Instagram",
            icon: <FontAwesomeIcon icon={faInstagram} />,
            text: "jessdoeswellness",
        }, 
    ]
}

const WellnessPage = () => {
    return (
        <Page
            color="var(--wellness)"
            main={data.main}
            aside={data.aside}
        >
            <ConnectSection
                links={data.links} 
                color="var(--wellness)"
            />
        </Page>
    )
}

export default WellnessPage
import React from "react"

import Layout from "../components/layout/layout"
import ConnectSection from "../components/connect/connect"
import { connectIcons } from "../components/connect/connect-icons"

import styles from "./about.module.scss"

const AboutPage = () => {
    return (
        <Layout>
            <main id="main">
                <article id="mainArticle">
                    <h1 className={styles.pageTitle}>About Me</h1>
                    <h2 className={styles.headingLarge}>Hello, my name is Jessica G. Abejar.</h2>
                    <h3 className={styles.headingMedium}>I am a multipotentialite, which means I do a little bit of a lot of things.</h3>
                    <p>Being creative but also analytical led me to graduating at the top of my business class, dancing across the seas, making childhood dreams come true in Brazil, organizing events in the local Filipino-American community, and sharing my passions with others around the world.</p>
                    <p>After a plethora of dance gigs, a desk job, some conferences, a monthly newspaper column, weekly night classes, a handful of online courses, and a few new career additions along the way, I realized my mission wasn't necessarily about what I do but how I live my life. My mission is not only about sharing my own unique story with others but also about helping others share theirs.</p>
                </article>
                <ConnectSection links={connectIcons.about.links} color="var(--primary)" />
            </main>
        </Layout>
    )
}

export default AboutPage
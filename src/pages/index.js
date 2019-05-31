import React from "react"

import SiteTitle from "../components/site-title"
import MainNavigation from "../components/main-navigation"
import Footer from "../components/footer"

import "../styles/index.scss"
import "../styles/global.scss"
import styles from "./index.module.scss"

const FrontPage = () => {
    return (
        <main className={styles.mainContainer}>
            <h1 className={styles.headingLarge}>Hello, my name is <br />
            <SiteTitle />
            </h1>
            <h2 className={styles.headingMedium}>I am a multipotentialite, which means I do a little bit of a lot of things.</h2>
            <p>You probably stumbled upon here looking for specific info about certain work that I do. As mentioned, I do a little bit of a lot of things, and if you read up about everything I do, it can get a bit ... overwhelming. So ...</p>
            <h2 className={styles.headingMedium}>Let me help you find the right Jessica you may be looking for!</h2>
            <MainNavigation />
            <Footer />
        </main>
    )
}

export default FrontPage

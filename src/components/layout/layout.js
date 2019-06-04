import React from "react"

import "../../styles/global.scss"
import styles from "./layout.module.scss"

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <main id="main">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
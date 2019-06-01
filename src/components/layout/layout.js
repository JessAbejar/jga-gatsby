import React from "react"

import "../../styles/index.scss"
import "../../styles/global.scss"
import styles from "./layout.module.scss"

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
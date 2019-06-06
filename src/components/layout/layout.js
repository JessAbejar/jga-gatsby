import React from "react"

import "../../styles/global.scss"
import styles from "./layout.module.scss"

import Header from "../header/header"
import SecondaryFooter from "../secondary-footer/secondary-footer"
import Footer from "../footer/footer"

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <main id="main" className={styles.mainContent}>
                {props.children}
            </main>
            <Footer>
                <SecondaryFooter />
            </Footer>
        </div>
    )
}

export default Layout
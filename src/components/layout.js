import React from "react"

import "../styles/index.scss"
import "../styles/global.scss"
import Styles from "./layout.module.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
    return (
        <div className={Styles.container}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
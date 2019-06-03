import React from "react"

import SiteTitle from "../site-title/site-title"
import MainNavigation from "../main-navigation/main-navigation"
import SecondaryNavigation from "../secondary-navigation/secondary-navigation"

import styles from "./header.module.scss"

const SkipToMain = () => {
    return (
        <div>
            <a href="#main" className={[styles.skip, styles.visuallyHidden, styles.focusable].join(' ')}>
                Skip to Main Content
            </a>
        </div>
    )
}

const Header = () => {
    return (
        <header>
            <SkipToMain />
            <SiteTitle />
            <MainNavigation />
            <SecondaryNavigation />
        </header>
    )    
}

export default Header
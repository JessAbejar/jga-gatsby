import React from "react"
import { Link } from "gatsby"

import styles from "./main-navigation.module.scss"

const PageTag = (props) => {
    return (
        <Link to={`/${props.pageName}`} className={styles.pageTag} activeClassName={styles.activePageTag} style={{backgroundColor: props.color}}>
            {props.pageName}
        </Link>
    )
}

const MainNavigation = (props) => {
    return (
        <nav>
            <div id="mainNavigation" className={styles.navMenu}>
                <PageTag 
                color="var(--dance)"
                pageName="dance"
                />
                <PageTag 
                color="var(--wellness)"
                pageName="wellness"
                />
                <PageTag 
                color="var(--events)"
                pageName="events"
                />
                <PageTag 
                color="var(--writing)"
                pageName="writing"
                />
                <PageTag 
                color="var(--tech)"
                pageName="tech"
                />
            </div>
            {props.children}
        </nav>
    )
}

export default MainNavigation


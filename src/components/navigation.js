import React from "react"
import { Link } from "gatsby"

import styles from "./navigation.module.scss"

const PageTag = (props) => {
    return (
        <Link to={`/${props.pageName}`}>
            <div className={styles.pageTag} style={{backgroundColor: props.color}}>
                {props.pageName}
            </div>
        </Link>
    )
}

const Navigation = () => {
    return (
        <nav className={styles.navMenu}>
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
            <PageTag 
            color="var(--primary)"
            pageName="about"
            />
        </nav>
    )
}

export default Navigation


import React from "react"

import styles from "./work-spotlight.module.scss"

const WorkSpotlight = (props) => {
    return(
        <section id="work-spotlight">
            <h2 className={styles.workHeading} style={{color: props.color}}>{props.spotlight.frontmatter.title}</h2>
            <div className={styles.workGrid}>
                <div>
                    <figure className={styles.workImg}>
                        <img
                            src={props.spotlight.frontmatter.image.publicURL}
                            alt={props.spotlight.frontmatter.image_description}
                        />
                    </figure>
                    <figure className={styles.workImg}>
                        <img
                            src={props.spotlight.frontmatter.logo.publicURL}
                            alt=""
                        />
                    </figure>
                </div>
                <div className={styles.workItem}>
                    <h3 className={styles.itemTitle}>{props.spotlight.frontmatter.role}</h3>
                    <p>{props.spotlight.frontmatter.description}</p>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default WorkSpotlight
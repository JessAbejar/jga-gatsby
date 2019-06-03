import React from "react"

import styles from "./work-videos.module.scss"

const WorkVideoItems = ({ items, color }) => {
    return(
        items.map((item,index) => (
            <div key={index} className={styles.workItem}>
                <figure className={styles.workVid}>
                    <div dangerouslySetInnerHTML = {{__html: item.node.html}} />
                </figure>
                <hgroup>
                    <h3 className={styles.itemTitle} style={{color: color}}>{item.node.frontmatter.title}</h3>
                    <h4 className={styles.byline}>{item.node.frontmatter.by} (Created {item.node.frontmatter.year_created})</h4>
                </hgroup>
                <p>{item.node.frontmatter.description}</p>
            </div>
        ))
    )
}

const WorkVideos = (props) => {
    return(
        <section id="work-videos">
            <h2 className={styles.workHeading} style={{color: props.color}}>{props.title}</h2>
            <div className={styles.workGrid}>
                <WorkVideoItems items={props.items} color={props.color}/>
            </div>
        </section>
    )
}

export default WorkVideos
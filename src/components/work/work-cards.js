import React from "react"

import styles from "./work-cards.module.scss"

const WorkCardItems = ({ items, color }) => {
    return(
        items.map((item,index) => (
            <div key={index} className={styles.workItem}>
                <figure className={styles.workImg}>
                    <img
                        src={item.node.frontmatter.image.publicURL}
                        alt={item.node.frontmatter.image_description}
                    />
                </figure>
                <h3 className={styles.itemTitle} style={{color: color}}>{item.node.frontmatter.title}</h3>
                <p className={styles.workDescription}>{item.node.frontmatter.description}</p>
                <div dangerouslySetInnerHTML = {{__html: item.node.html}} />
            </div>
        ))
    )
}

const WorkCards = (props) => {
    return(
        <section id="work-cards">
            <h2 className={styles.workHeading} style={{color: props.color}}>{props.title}</h2>
            <div className={styles.workGrid}>
                <WorkCardItems items={props.items} color={props.color}/>
            </div>
        </section>
    )
}

export default WorkCards
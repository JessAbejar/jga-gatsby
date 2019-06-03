import React from "react"

import styles from "./work-cards.module.scss"

const WorkItems = ({ items, color }) => {
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
                <div dangerouslySetInnerHTML = {{__html: item.node.frontmatter.description}} className={styles.workDescription} />
                <div dangerouslySetInnerHTML = {{__html: item.node.html}} />
            </div>
        ))
    )
}

const WorkCards = (props) => {
    return(
        <section id="work">
            <h2 className={styles.workHeading} style={{color: props.color}}>{props.title}</h2>
            <div className={styles.workGrid}>
                <WorkItems items={props.items} color={props.color}/>
            </div>
        </section>
    )
}

export default WorkCards
import React from "react"
import { Link } from "gatsby"


import styles from "./tech-cards.module.scss"

const TechCardItems = ({ items }) => {
    return(
        items.map((item,index) => (
            <div key={index} className={styles.workItem}>
                <figure className={styles.workImg}>
                    <img
                        src={item.node.frontmatter.image.publicURL}
                        alt={item.node.frontmatter.image_description}
                    />
                </figure>
                <h3 className={styles.itemTitle}>{item.node.frontmatter.title}</h3>
                <p className={styles.skillsDescription}>{item.node.frontmatter.main_skills}</p>
                <p>{item.node.frontmatter.description}</p>
                <div className={styles.techCardLinks}>
                    <a href={item.node.frontmatter.website}>
                        Website
                    </a> • <a href={item.node.frontmatter.source}>
                        Source
                    </a> • <Link to={`/tech/${item.node.fields.slug}`}>
                        Process
                    </Link>
                </div>
            </div>
        ))
    )
}

const TechCards = (props) => {
    return(
        <section id="tech-cards">
            <h2 className={styles.workHeading}>{props.title}</h2>
            <div className={styles.workGrid}>
                <TechCardItems items={props.items} />
            </div>
        </section>
    )
}

export default TechCards
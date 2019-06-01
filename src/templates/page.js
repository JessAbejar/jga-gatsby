import React , { Fragment } from "react"
import Layout from "../components/layout"

import styles from "./page.module.scss"

const AsideItems = ({ items, color }) => {
    return(
        items.map((item,index) => (
            <Fragment key={index}>
                <h3 className={styles.itemTitle} style={{color: color}}>{item.title}</h3>
                <p>{item.description}</p>
            </Fragment>
        ))
    )
} 
/*
const WorkItems = items.map(item => (
    <div className={styles.workItem}>
        <figure className={styles.workImg}>
            <img src={item.img.url} alt={item.img.alt} className={styles.workImg} />
        </figure>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        {item.content}
    </div>
))

const WorkSections = sections.map(section => (
    <Fragment>
        <h2 className={styles.workHeading}>{section.title}</h2>
        <div className={styles.workGrid}>
            <WorkItems items={section.items} />
        </div>
    </Fragment>
))
*/

const Page = (props) => {
    return (
        <Layout>
            <main id="main">
                <article id="mainArticle">
                    <h1 className={styles.pageTitle} style={{color: props.color}}>{props.main.title}</h1>
                    <div dangerouslySetInnerHTML={props.main.content} />
                </article>
                <aside id="aside" className={styles.aside}>
                    <h2 className={styles.asideHeading}>{props.aside.heading}</h2>
                    <AsideItems items ={props.aside.items} color={props.color}/>
                </aside>
                {props.children}
            </main>
        </Layout>
    )
}

export default Page
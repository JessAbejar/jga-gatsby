import React, { Fragment } from "react"

import styles from "./aside.module.scss"

const AsideItems = ({ items, color }) => {
    return(
        items.map((item,index) => (
            <Fragment key={index}>
                <dt className={styles.itemTitle} style={{color: color}}>{item.title}</dt>
                <dd className={styles.itemDescription}>{item.description}</dd>
            </Fragment>
        ))
    )
} 

const AsideSection = (props) => {
    return (
        <aside id="aside" className={styles.aside}>
            <h2 className={styles.asideHeading}>{props.aside.heading}</h2>
            <dl>
                <AsideItems items ={props.aside.items} color={props.color}/>
            </dl>
        </aside>
    )
}

export default AsideSection
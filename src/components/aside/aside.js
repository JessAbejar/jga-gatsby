import React, { Fragment } from "react"

import styles from "./aside.module.scss"

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

const AsideSection = (props) => {
    return (
        <aside id="aside" className={styles.aside}>
            <h2 className={styles.asideHeading}>{props.aside.heading}</h2>
            <AsideItems items ={props.aside.items} color={props.color}/>
        </aside>
    )
}

export default AsideSection
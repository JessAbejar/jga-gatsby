import React from "react"

import styles from "./connect.module.scss"

const ConnectLinks = ({ links, color}) => {
    return (
        links.map((link,index) => (
            <div className={styles.connectLinks} key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label} style={{color: color}} >
                    {link.icon} {link.text}
                </a> 
            </div>
        ))
    )
}

const ConnectSection = (props) => {
    return(
        <section id="connect" className={styles.connect}>
            <h2 className={styles.connectHeading}>Connect With Me</h2>
            <ConnectLinks links={props.links} color={props.color}/>
        </section>
    )
}

export default ConnectSection
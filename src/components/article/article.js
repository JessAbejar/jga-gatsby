import React from "react"

import styles from "./article.module.scss"

const ArticleSection = (props) => {
    return (
        <article id="mainArticle">
            <h1 className={styles.pageTitle} style={{color: props.color}}>{props.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.content}} />
        </article>
    )
}

export default ArticleSection
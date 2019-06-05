import React, { Fragment } from "react"
import { Link } from "gatsby"

import styles from "./secondary-footer.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"

const SecondaryFooter = () => {
    return (
        <Fragment>
            <div className={styles.sitemap}>
                <span>Sitemap:</span>
                <div>
                    <Link to = "/dance">
                        Dance
                    </Link>
                    <Link to = "/wellness">
                        Wellness
                    </Link>
                    <Link to = "/events">
                        Events
                    </Link>
                    <Link to = "/writing">
                        Writing
                    </Link>
                    <Link to = "/tech">
                        Tech
                    </Link>
                    <Link to = "/blog">
                        Blog
                    </Link>
                    <Link to = "/about">
                        About
                    </Link>
                </div>
            </div>
            <div className={styles.backToTop}>
                <a href = "#top">
                    Back to Top &nbsp;
                    <FontAwesomeIcon icon={faChevronCircleUp} />
                </a>
            </div>
        </Fragment>

    )
}

export default SecondaryFooter
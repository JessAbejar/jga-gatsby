import React from "react"
import { Link } from "gatsby"

const PageTab = ({ pageName }) => {
    return (
        <Link to={`/${pageName}`}>
            <div 
                className={`pageTag ${pageName}`}
            >
                {pageName}
            </div>
        </Link>
    )
}

const Navigation = () => {
    return (
        <nav className="navMenu">
            <PageTab 
            pageName="dance"
            />
            <PageTab 
            pageName="wellness"
            />
            <PageTab 
            pageName="events"
            />
            <PageTab 
            pageName="writing"
            />
            <PageTab 
            pageName="tech"
            />
            <PageTab 
            pageName="about"
            />
        </nav>
    )
}

export default Navigation


import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname, article, lang }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    siteUrl: url
                    defaultImage: image
                    twitterUsername
                }
            }
        }
    `)

    const seo = {
        title: title || site.siteMetadata.defaultTitle,
        description: description || site.siteMetadata.defaultDescription,
        image: `${site.siteMetadata.siteUrl}${image || site.siteMetadata.defaultImage}`,
        url: `${site.siteMetadata.siteUrl}${pathname || "/"}`,
        twitterUsername: site.siteMetadata.twitterUsername,
    }

    return (
        <Helmet htmlAttributes={{ lang }} title={seo.title} titleTemplate={`%s | ${site.siteMetadata.defaultTitle}`}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.twitterUsername && (
              <meta name="twitter:creator" content={seo.twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false,
    lang: "en",
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
    lang: PropTypes.string,
}

export default SEO
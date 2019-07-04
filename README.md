# JessicaGAbejar.com
- [Project Summary](#project-summary)
- [Updates Summary](#updates-summary)
- [Installation](#installation)
- [Learning Resources](#learning-resources)
- [Using Gatsby](#using-gatsby)
- [File and Directory Organization](#file-and-directory-organization)
- [Site Features](#site-features)
  - [Page Composition](#page-composition)
  - [Component Composition and Content Data Sourcing](#component-composition-and-content-data-sourcing)
  - [Components and Content](#components-and-content)
  - [Page Templates](#templates)
  - [Global Styles](#global-styles)

## Project Summary

![Screenshot of JessicaGAbejar.com.](https://jessicagabejar.com/static/9db9da311bd185284080d97e9a5ad5b0/6fbf7/image.png)

JessicaGAbejar.com is my personal website, built using Gatsby.js with React.js, GraphQL, Sass/SCSS (using CSS Modules), and data sourced from JSON and Markdown files. It highlights all my major interests across various disciplines including dance, wellness, events, writing, and tech.

Features include fast site performance, reusable components and design elements, optimized images, content from multiple data sources, SEO, and offline support.

To see how I built this website in detail from design to development and takeaways, take a look at the [process write-up for JessicaGAbejar.com](https://jessicagabejar.com/tech/jga-website).

This project is hosted on Netlify.

## Updates Summary
This is a summary of major site updates:

- 6/17/2019: Tech write-ups all added. Images fixed by uploading directly to Netlify instead of using the build command.
- 6/6/2019: First deployment. Site includes all main pages (home, dance, wellness, events, writing, tech, and about) and page templates for tech spotlight & project created.

If you see any issues or errors, feel free to file an issue or submit a pull request.

## Installation

To install:
```
git clone https://github.com/jessabejar/jga-gatsby
```

To run development environment locally:
```
cd jga-gatsby
gatsby develop
```

Development environment is at `localhost:8000`.

## Learning Resources
I used this project as an opportunity to learn Gatsby, React, and GraphQL. I used the following tutorials and documentation to help build this site:

- [Gatsby official tutorial](https://www.gatsbyjs.org/tutorial/)
- [Gatsby official documentation](https://www.gatsbyjs.org/docs/)
- [Gatsby Plugins official documentation](https://www.gatsbyjs.org/plugins/)
- [Andrew Mead's The Great Gatsby Bootcamp Tutorial](https://youtu.be/8t0vNu2fCCM)

## Using Gatsby

### Boilerplate
This site was created using Gatsby.js's [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world), which is the most basic of Gatsby boilerplates or starters. I also used the following starters as a reference in constructing pages and installing dependencies and plugins:

- [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)
- [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)
- [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)

### Dependencies and Plugins
The following is a list of dependencies and plugins for this site. For more info on Gatsby plugins, check out the [Gatsby Plugins official docs](https://www.gatsbyjs.org/plugins/).

- [gatsby](https://www.npmjs.com/package/gatsby)
- [react](https://npm.im/react)
- [react-dom](https://npm.im/react-dom)
- [prettier](https://npm.im/prettier)
- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)
- [react-fontawesome](https://www.npmjs.com/package/react-fontawesome)
- [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest)
- [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline)
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet)
- [react-helmet](https://npm.im/react-helmet)
- [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image)
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp)
- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp)
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem)
- [gatsby-transformer-json](https://www.gatsbyjs.org/packages/gatsby-transformer-json/)
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images)
- [gatsby-responsive-iframe](https://www.gatsbyjs.org/packages/gatsby-remark-responsive-iframe/)
- [gatsby-plugin-catch-links](https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links/)
- [gatsby-plugin-twitter](https://www.gatsbyjs.org/packages/gatsby-plugin-twitter/)
- [gatsby-remark-copy-linked-files](https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/)
- [gatsby-plugin-web-font-loader](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/)

## File and Directory Organization
Included are the following top-level files and directories. For more information on these files, please take a look at [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world).

```
    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md 
```

### Source Directory
The `src` directory is further broken down into the following directories:

```
    .
    ├── src
    │   ├── components
    │   ├── content
    │   ├── images
    │   ├── pages
    │   ├── styles
    │   └── templates
```

- **Components**: Reusable React components.
- **Content**: Markdown and JSON content files and related images.
- **Images**: Icon and favicon.
- **Pages**: Main pages including Home, Dance, Wellness, Events, Writing, Tech, About, Blog, and 404.
- **Styles**: Global sass files including variables.
- **Templates**: Page templates for dynamically rendered blogposts and project pages.

#### Component Directory and File Organization

Components are organized into directories labeled by its component's name and contain a single JavaScript and Sass file.

Example, `<Header>` component:
```
    .
    ├── header
    │   ├── header.js
    │   └── header.module.scss
```

Exceptions include the `connect` directory, which contains an icon library; the `seo` directory, as the `<SEO>` component does not require a stylesheet; and the `work` directory, which contains all the different types of work components and their corresponding Sass files.

#### Content Directory and File Organization 

## Site Features

### Page Composition

Each page follows a similar composition with a few exceptions. There are currently four types of pages:

1. Homepage
2. Main pages
3. Tech Projects
4. Tech Spotlight

The Homepage is different from all other pages in that it only includes a `<main>` section and a `<Footer>` component (using HTML tag `<footer>`).

All other pages are wrapped in a `<Layout>` component, which includes a `<Header>` (using HTML tag `<header>`) and `<Footer>` component. The `<Layout>` component renders children, which are passed as props. These children are wrapped in a `<main>` HTML tag. They can include various other components, as seen below. These components can be included or ommitted depending on need.

Tech projects and the tech spotlight are dynamically rendered pages. They use the `<Project>` and `<ProjectSpotlight>` component/page templates and source data from Markdown files located in the `content` directory. They are wrapped in a `<Layout>` component with its content set in inner HTML. For more information, check below for [page templates](#page-templates).

### Component Composition and Content Data Sourcing

The React components used in this project use ES6 arrow functions. If and when possible, the components use semantic HTML tags in the JSX. Each component renders its style from a CSS module specific to that component, importing an scss partial with several variables.

Content can be sourced from various data files using Gatsby's `useStaticQuery` hook and `graphql`. For more information, check the [reference guide on useStaticQuery hook](https://www.gatsbyjs.org/docs/use-static-query/).

### Components and Content
The following are components used in this site and with code on how to source data to specific components.

- [Layout](#layout)
- [Site Title](#site-title)
- [SEO](#seo)
- [Header](#header)
- [Navigation Menus](#navigation-menus)
- [Article](#article)
- [Aside](#aside)
- [Connect](#connect)
- [Work Components](#work-components)
- [Footer](#footer)

#### Layout
The `<Layout>` component is the main container for all pages and templates except for `index.js`. The component renders the `<Header>`, `<Footer>`, and `<SecondaryFooter>` (nested in `<Footer>`) components and passes children as props.

Usage on pages and templates (main container):
```
<Layout>
    // children
</Layout>
```

#### Site Title
The `<SiteTitle>` component contains the site title and logo linked to the homepage. The component queries the site title text from the site's metadata, which is added to `gatsby-config.js`. For more information, check the [official documentation on the Gatsby Config API](https://www.gatsbyjs.org/docs/gatsby-config/). The `<SiteTitle>` component takes no props.

Site title in `gatsby-config.js` :
```
module.exports = {
    siteMetadata: {
        title: `Site Title`,
    },
}
```

Site title query in the `<SiteTitle>` component:
```
const data = (useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`))
```

Usage in pages (nested in `<Header>`) and on the homepage:
```
<SiteTitle />
```

#### SEO
The `<SEO>` component includes the site's metadata. The component uses `React Helmet` and  `gatsby-plugin-react-helmet`. For more information, check the [reference guide on adding metadata using React Helmet and gatsby-plugin-react-helmet](https://www.gatsbyjs.org/docs/add-page-metadata/#using-react-helmet-and-gatsby-plugin-react-helmet).

The component passes the following props: `{ title, description, image, pathname, article, lang }`. Default values are queried from the site's metadata and are overridden when props are passed as it is rendered. `PropTypes` sets default values and checks the props' types.

Site metadata in `gatsby-config.js`:
```
module.exports = {
    siteMetadata: {
        title: `Site Title`,
        description: `Default Description`,
        url: `https://defaultURL.com`,
        image: `/defaultImg.png`,
        twitterUsername: `@_defaultTwitterUsername`,
    },
}
```

Site Metadata query in `<SEO>` component:
```
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
```

Usage in pages (nested in `<Header>`) and on the homepage (nested in `<Layout>`):
```
<SEO title="Page Title" /> // Renders "Page Title | Site Title" in tab
```

*** Future Use**

For dynamically rendered pages such as blogposts and project pages, custom metadata will be passed as props in the component. The component will query each project/post's frontmatter for the props values.

#### Header
The `<Header>` component renders the `<SkipToMain>` component (written and returned within the `header.js` file), the `<SiteTitle>` component, the `<MainNavigation>` component, and the `<SecondaryNavigation>` component (nested in `<MainNavigation>`). The `Header` component takes no props.

Usage in pages (nested in `Layout`):
```
<Header />
```

#### Navigation Menus

#### Article

#### Aside

#### Connect

#### Work Components

##### Work Cards

##### Work Videos

##### Work Spotlight

##### Tech Cards

#### Footer

### Page Templates

#### Tech Spotlight

#### Tech Projects

#### Blogposts

### Global Styles
- [Colors](#colors)
- [Text](#text)
- [Layout](#layout)

#### Colors

#### Text

#### Layout


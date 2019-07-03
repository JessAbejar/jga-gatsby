# JessicaGAbejar.com

- [Project Summary](#project-summary)
- [Updates Summary](#updates-summary)
- [Learning Resources](#learning-resources)
- [Using Gatsby](#using-gatsby)
- [File and Directory Organization](#file-and-directory-organization)
- [Site Features](#site-features)
  - [Components and Content](#components-and-content)
  - [Page Templates](#templates)
  - [Styles](#styles)

## Project Summary

JessicaGAbejar.com is my personal website, built using Gatsby.js with React.js, GraphQL, and Sass/SCSS. It highlights all my major interests across various disciplines including dance, wellness, events, writing, and tech.

Features include fast site performance, reusable components and design elements, optimized images, content from multiple data sources, SEO, and offline support.

To see how I built this website in detail from design to development and takeaways, take a look at the [process write-up for JessicaGAbejar.com](https://jessicagabejar.com/tech/jga-website).

This project is hosted on Netlify.

## Updates Summary
This is a summary of major site updates:

- 6/17/2019: Tech write-ups all added. Images fixed by uploading directly to Netlify instead of using the build command.
- 6/6/2019: First deployment. Site includes all main pages (home, dance, wellness, events, writing, tech, and about) and page templates for tech spotlight & project created.

## Learning Resources
I used this project as an opportunity to learn Gatsby, React, and GraphQL. I used the following tutorials and documentation to help build this site:

- [Gatsby official tutorial](https://www.gatsbyjs.org/tutorial/)
- [Gatsby official docs](https://www.gatsbyjs.org/docs/)
- [Gatsby Plugins official docs](https://www.gatsbyjs.org/plugins/)
- [Andrew Mead's The Great Gatsby Bootcamp Tutorial](https://youtu.be/8t0vNu2fCCM)

## Using Gatsby
- [Boilerplate](#boilerplate)
- [Dependencies and Plugins](#dependencies-and-plugins)

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
- **Pages**: Main pages:
  - Home
  - Dance
  - Wellness
  - Events
  - Writing
  - Tech
  - About
  - Blog
  - 404
- **Styles**: Global sass files including variables.
- **Templates**: Page templates for dynamically rendered blogposts and project pages.

## Site Features

### Components and Content
- [Layout and SEO](#layout-and-seo)
- [Site Title](#site-title)
- [Header](#header)
- [Navigation Menus](#navigation-menus)
- [Article](#article)
- [Aside](#aside)
- [Connect](#connect)
- [Work Components](#work-components)
- [Footer](#footer)

#### Layout and SEO

#### Site Title

#### Header

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
- [Tech Spotlight](#tech-spotlight)
- [Tech Projects](#tech-projects)

#### Tech Spotlight

#### Tech Projects

### Styles
- [Colors](#colors)
- [Text](#text)
- [Layout](#layout)

#### Colors

#### Text

#### Layout


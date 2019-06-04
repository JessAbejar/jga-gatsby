const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark" && (node.frontmatter.type === "tech-spotlight" || node.frontmatter.type === "tech-project")) {
        const slug = path.basename(node.fileAbsolutePath, ".md")
        
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectSpotlight = path.resolve("./src/templates/project/project-spotlight.js")
    const projects = path.resolve("./src/templates/project/project.js")

    const res = await graphql(`
        query {
            allMarkdownRemark(filter: {fields: {slug: {glob: "*"}}}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            type
                        }
                    }
                }
            }
        }
    `)

    if (res.errors) {
        console.error(res.errors);
        throw res.errors;
    }


    res.data.allMarkdownRemark.edges.forEach((edge) => {
        if (edge.node.frontmatter.type === "tech-spotlight") {
            createPage({ 
                component: projectSpotlight,
                path: `/tech/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        } if (edge.node.frontmatter.type === "tech-project") {
            createPage({ 
                component: projects,
                path: `/tech/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
    })
}
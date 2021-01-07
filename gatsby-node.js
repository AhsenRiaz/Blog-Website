const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
            edges {
              node {
                slug
                title
                subtitle
                content {
                  raw
                }
                author
                image {
                  file {
                    url
                  }
                }
              }
            }
          }
      }
    `
  );

      const posts = result.data.allContentfulBlogPost.edges

      posts.forEach((post) => {
          
        createPage({
            path : `/blog/${post.node.slug}`,
            component : path.resolve("./src/templates/BlogPosts.tsx"),
            context : {
                data :  post.node
                
            }
        })

      })

};

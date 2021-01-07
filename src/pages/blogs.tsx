import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import style from "./blogs.module.css"
import { Container, Grid, Typography } from "@material-ui/core"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { auth, provider } from '../features/SignUp'
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../store/index"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface blogsList {
    data: any
}

interface blogs {
    data: any
    pageContext: any
}

const blogs: React.FC<blogs> = () => {
    const dispatch = useDispatch()
    const user = useSelector((store) => (
        store
    ))
    console.log(user)




    const data = useStaticQuery(
        graphql`
        query MyQuery {
            allContentfulBlogPost {
              edges {
                node {
                  image {
                    file {
                      url
                    }
                    createdAt
                  }
                  author
                  slug
                  subtitle
                  title
                  content {
                    raw
                  }
                }
              }
            }
          }
        `
    );

    const EachBlog = data.allContentfulBlogPost.edges

    //    authentication
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            const data = result.user.displayName
            dispatch(addUser({ data }))
        }

        ).catch(error => console.log(error))
    }

    return (
        <div className={style.Blogs_container}>
            <Navbar />
            <Container maxWidth="lg" >
                    <div className = {style.Blogs_header} >
                        <Typography variant = "h3" >
                            Blogs
                        </Typography>
                    </div>
            </Container>
            {EachBlog.map((blog) => {
                const firstHalf = (str) => {
                    if (str.length / 4) {
                        return str.slice(0, str.length / 4)
                    }
                    else {
                        return str
                    }
                }
                return (
                    <div key = {blog.node.slug} >
                        <Container maxWidth="lg" >
                            <div className={style.Blogs_wrapper} >
                                <Grid container >
                                    <Grid item lg={4} md = {6}  >
                                        <div className={style.Blogs_img} >
                                            <img src={blog.node.image.file.url}  alt={blog.node.title} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={8} md = {6}>
                                        <div className={style.Blogs_data} >
                                            <div className={style.Blogs_title} >
                                                <Typography variant="h6" >
                                                    {blog.node.title}

                                                </Typography>
                                            </div>

                                            <div className={style.Blogs_content} >
                                                <Typography component="span" >
                                                    {firstHalf(documentToReactComponents(JSON.parse(blog.node.content.raw)))}
                                                </Typography>
                                            </div>
                                            <div className={style.Blogs_button} >
                                                {!user ? (
                                                    <button onClick={signIn} >
                                                        Sign In To Read More

                                                    </button>
                                                ) : <Link to={`/blog/${blog.node.slug}`} >
                                                        <button>
                                                            Read More
                                                     </button>
                                                    </Link>}

                                            </div>

                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                        </Container>
                    </div>
                )
            })}
            <Footer/>
        </div>
    )
}

export default blogs








import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import style from "./templates.module.css"
import SecondaryNavbar from '../components/SecondaryNavbar'
import Footer from '../components/Footer'
import {Link} from "@reach/router"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
        },
    }),
);

interface BlogPost {
    pageContext: any
    author: string
    title: string
    subtitle: string
}

const BlogPosts: React.FC<BlogPost> = ({ pageContext: { data } }) => {
    console.log(data)
    console.log(data.content)
    const classes = useStyles();

    return (
        <div>

            <SecondaryNavbar />
            <div className={style.blogpost_container}>
                <Container maxWidth="lg" >
                   
                    <div className={style.blogpost_title}>
                        <Typography className={style.title} >
                            {data.title}
                        </Typography>
                        <div className={style.blogpost_subtitle}>
                            <Typography className={style.subtitle} variant="h6" >
                                {data.subtitle}
                            </Typography>
                        </div>
                    </div>

                </Container>
                <Container maxWidth="lg" >
                    <div className={style.blogpost_imagecontainer}>
                        <div className={style.blogpost_image} >
                            <img src={data.image.file.url} alt={data.title} />
                        </div>

                    </div>
                </Container>

                <Container maxWidth="sm" >
                    <div className={style.blogpost_datacontainer} >
                        <div className={style.blogpost_paragraph} >
                            {documentToReactComponents(JSON.parse(data.content.raw))}
                        </div>
                    </div>
                    <div className={style.blogpost_author}>
                        <span className={style.author} >Author : </span>
                        <a href="https://www.facebook.com/muhammadahsan.riaz.3"><span className={style.authorName} >{data.author}</span></a>

                    </div>
                   
                    <div className={style.Blogs_previouspage} >
                    <Link to = "/blogs" >
                        <button>
                            Go To Previous Page
                        </button>
                        </Link>
                    </div>
                    <div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPosts

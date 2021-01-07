import React from "react";
import style from "./component.module.css";
import { Container, Grid, Typography , Button } from "@material-ui/core";
import blogImage from "./images/blogImage.svg"
import {Link} from "gatsby"

interface BlogSectionProps {
    src : string
}

const BlogsSection:React.FC<BlogSectionProps> = ({src}) => {
    return (
        <div className={style.BlogsSection}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={6} md = {6} sm = {12} xs = {12} >
                        <div className={style.BlogSection_image} >
                            <img src={blogImage} alt="sdfsdf" />
                        </div>

                    </Grid>
                    <Grid item lg={6} md = {6} sm = {12} xs = {12} >
                        <div className={style.BlogSection_content} >
                            <Typography variant="h4" >
                                What are Blogs?
                            </Typography>
                            <div className={style.BlogSection_blog} >
                                <p className = {style.BlogSection_blogcontent}  >
                                    A blog (a shortened version of “weblog”) is an online journal or informational website displaying information in reverse chronological order, with the latest posts appearing first, at the top. It is a platform where a writer or a group of writers share their views on an individual subject.
                            </p>

                            </div>
                            <div className = {style.BlogSection_button} >
                                <Link to = {src} >
                                <Button variant = "outlined" >
                                    Check Out Blogs
                                </Button>
                                </Link>
                                
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default BlogsSection;

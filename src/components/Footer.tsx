import React from 'react'
import style from "./component.module.css"
import { Container, Grid, Icon, Typography } from "@material-ui/core"
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
    return (
        <div className={style.FooterContainer}>
            <Container maxWidth="lg" >
                <div className={style.FooterWrapper} >
                    <Grid container  >
                        <Grid item lg={8}   >
                            <div className={style.footer_brand} >
                                <Typography variant="h4" >
                                    DevToday
                                </Typography>
                            </div>

                        </Grid>
                        <Grid item lg = {4} >
                            <div className = {style.footer_right} >
                                <IconButton>
                                    <FacebookIcon fontSize = "large"  color = "primary" />
                                </IconButton>
                                <IconButton>

                                <TwitterIcon fontSize = "large"  color = "primary" />
                                </IconButton>
                                
                                <IconButton>
                                    <InstagramIcon fontSize = "large" color = "primary" />

                                </IconButton>


                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </div>
    )
}

export default Footer

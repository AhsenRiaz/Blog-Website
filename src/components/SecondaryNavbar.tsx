import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {IconButton , Container} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import style from "./component.module.css"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function SecondaryNavbar() {
  const classes = useStyles();

  return (
         <div className={classes.root}>
      <AppBar position="static" className = {style.appbar} >
      <Container maxWidth = "lg" >

        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Blog By Ahsen
          </Typography>
          <Button href = "https://www.facebook.com/muhammadahsan.riaz.3" target = "_blank" className = {style.Secondarnavbar_followbutton} color="inherit" variant = "outlined" >Follow</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

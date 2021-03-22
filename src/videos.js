import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  Button,
  Box,
} from "@material-ui/core/";
import vid1 from "./vidz/vid1.webp";
import vid2 from "./vidz/vid2.webp";
import vid3 from "./vidz/vid3.jpg";
import vid4 from "./vidz/vid4.png";
import Sten from "./sten.png";

const videos = [
  { video: vid1, title: "Berd Dances", avatar: <Avatar>B</Avatar> },
  { video: vid2, title: "Dog does a thing", avatar: <Avatar>D</Avatar> },
  {
    video: vid3,
    title: "The beauty of dark souls",
    avatar: <Avatar>DS</Avatar>,
  },
  {
    video: vid4,
    title: "I and my friends make a painting",
    avatar: <Avatar src={Sten}>Sten</Avatar>,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    //color: theme.palette.text.secondary,
    maxWidth: 322,
    Maxheight: 300,
    //backgroundColor: "primary",
  },
  paperContainer: {
    height: 300,
  },
  video: {
    maxWidth: 320,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormVideo() {
    const i = Math.floor(Math.random() * videos.length);
    console.log(i);
    const video = videos[i].video;
    const title = videos[i].title;
    const _avatar = videos[i].avatar;

    return (
      <div classname={classes.paperContainer}>
        <Box className={classes.paper} style={{ margin: 3 }}>
          <img
            className={classes.video}
            src={video}
            alt="thumbnail"
            width="100%"
          />
          <br />
          <Button startIcon={_avatar} size="small" color="secondary">
            <Typography component="body2">{title}</Typography>
          </Button>
        </Box>
      </div>
    );
  }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <FormVideo />
        </Grid>
        <Grid item xs={3}>
          <FormVideo />
        </Grid>
        <Grid item xs={3}>
          <FormVideo />
        </Grid>
        <Grid item xs={3}>
          <FormVideo />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1} style={{ paddingLeft: 90 }}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

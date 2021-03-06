import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import {
  Drawer,
  //  Button,
  Divider,
  // Icon,
  TextField,
  Avatar,
  // Container,
} from "@material-ui/core/";
import {
  HomeSharp,
  Whatshot,
  Subscriptions,
  VideoLibrarySharp,
  History,
  WatchLater,
  ThumbUpAltSharp,
  VideoLibrary,
  Search,
  //  ThumbDown,
  Mic,
  Apps,
} from "@material-ui/icons";
import Sten from "./sten.png";
import Youtube1 from "./YoutubeFull.png";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  topBar: {
    alignItems: "center",
  },
  TextField: {
    backgroundColor: "#0000",
  },
  ToolBar: {
    backgroundColor: "#0000",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.ToolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <img alt="Youtube" src={Youtube1} height="20px" />
          </IconButton>
          <TextField
            className={classes.TextField}
            id="outlined-basic"
            label="search"
            variant="outlined"
            fullWidth
            style={{
              marginLeft: 50,
            }}
            margin="dense"
          ></TextField>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton style={{ marginRight: 50 }}>
            <Mic />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <Avatar alt="Sten" src={Sten} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <br />

          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeSharp />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Home"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Trending"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Subscriptions"} />
              <br></br>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <VideoLibrarySharp />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Library"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"History"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <VideoLibrary />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Your Videos"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WatchLater />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Watch later"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ThumbUpAltSharp />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Liked Videos"} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText color="secondary" secondary={"SUBSCRIPTIONS"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar alt="Sten" src={Sten} />
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Sten Unt"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar>K</Avatar>
              </ListItemIcon>
              <ListItemText color="textPrimary" secondary={"Kodut???? iminen1"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar alt="ok" />
              </ListItemIcon>
              <ListItemText
                color="textPrimary"
                secondary={"kolmas subscription"}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar alt="ok">TMR</Avatar>
              </ListItemIcon>
              <ListItemText
                color="textPrimary"
                secondary={"the Modern Rogue"}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar alt="ok" />
              </ListItemIcon>
              <ListItemText
                color="textPrimary"
                secondary={"You're not supposed to scroll this far"}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main>
        <Divider style={{ paddingBottom: 70 }}></Divider>
      </main>
    </div>
  );
}

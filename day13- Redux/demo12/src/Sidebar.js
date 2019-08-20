import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import Button from "@material-ui/core/Button";
import Hello from './Hello'
import MovieDetail from './Movies/MovieDetail'
import MovieList from './Movies/movieList'


// import RoadMap from './learningRoadmap';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    fontFamily: "Montserrat"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "white"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36,
    color: "black"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  logo: {
    height: "70px"
    // padding: '5px'
  },
  background: {
    backgroundColor: "white"
  },
  navlinks: {
    position: "relative",
    marginLeft: "0px",
    display: "inline",
    textAlign: "right"
  },
  navIcons: {
    fontSize: "1.5em"
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ marginLeft: "auto" }}>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List>
          {[
            { name: "Counter", icon: "fa-home" },
            { name: "Movie List", icon: "fa-history" },
            {name: "Movie Detail" , icon: "fa-user"},
            {
              name: "Logout",
              icon: "fas fa-sign-out-alt"
            }
          ].map((text, index) => (
            <Link className="Link" key={text.name} to={`/dashboard/${text.name}`}>
            <ListItem button >
                <ListItemIcon>
                  <i className={`fas ${text.icon} ${classes.navIcons}`} />
                </ListItemIcon>
                <ListItemText primary={text.name} />
            </ListItem>
            </Link>
          ))}
          <ListItem button>
          
          </ListItem>
        </List>
      </Drawer>
      <main>
      <Switch>
      
        <Route exact path='/dashboard/home' component={Hello}/>
        {/* <Route path="/dashboard/movies" component={MovieList} />
        <Route path="/dashboard/movies/:id" component={MovieDetail} /> */}

      </Switch>
      </main>
    </div>
  );
}

import Slider from './components/products/imageslide/slide'
import Products from './components/products/products'
import Electronics from './componentItems/products/electronics/electronics'
import Jewelery from './componentItems/products/jewelery/electronics'
import Clothes from './components/products/clothes/clothes'
import About from './components/about/about'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Welcome to M.A.B, Whare you can Buy and Sell Anything you want
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItemIcon><Link to="/">Home</Link></ListItemIcon>
          </List>
          <List>
            <ListItemIcon><Link to="/Electronics">Electronics</Link></ListItemIcon>
          </List>
          <List>
            <ListItemIcon><Link to="/Jewelery">Jewelery</Link></ListItemIcon>
          </List>
          <List>
            <ListItemIcon><Link to="/Clothes">Clothes</Link></ListItemIcon>
          </List>
          <List>
            <ListItemIcon><Link to="/About">About</Link></ListItemIcon>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      <div>
        <Switch>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Clothes">
            <Clothes/>
          </Route>
          <Route path="/Jewelery">
            <Jewelery/>
          </Route>
          <Route path="/Electronics">
            <Electronics/>
          </Route>
          <Route path="/">
            <Slider/>
            <Products/>
          </Route>
        </Switch>
      </div>
      </main>
    </Router>
  </div>
  );
}

export default App;

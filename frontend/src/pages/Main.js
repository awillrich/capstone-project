import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ArchiveIcon from '@material-ui/icons/Archive';
import AddIcon from '@material-ui/icons/Add';
import AlarmIcon from '@material-ui/icons/Alarm';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PrivateRoute from '../components/PrivateRoute';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import TestList from "../components/TestList";
import Login from "../components/Login"
import TestForm from "../components/TestForm";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Main(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
      () => React.forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
      [to],
    );

    return (
      <li>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItemLink button to="/tests/create" primary="Neuer Test" icon={<AddIcon />} />
        <ListItemLink button to="/tests/running" primary="Laufende Tests" icon={<AlarmIcon />} />
        <ListItemLink button to="/tests/today" primary="Heutige Tests" icon={<CalendarTodayIcon />} />
        <ListItemLink button to="/tests/certificate" primary="Bestätigung" icon={<InsertDriveFileIcon />} />
        <ListItemLink button to="/tests/archive" primary="Archiv" icon={<ArchiveIcon />} />
      <Divider />
        <ListItemLink button to="/profile" primary="Profil" icon={<PersonIcon />} />
        <ListItemLink button to="/logout" primary="Logout" icon={<ExitToAppIcon />} />
      </List>
    </div>
  );

  function login(form) {
    let email = form[0];
    let password = form[1];
    let myHeadersAuth = new Headers();
    myHeadersAuth.append("Content-Type", "application/json");

    let rawAuth = JSON.stringify({
      "email": email, //"vcummings@example.org",
      "password": password
    });

    let requestOptionsAuth = {
      method: 'POST',
      headers: myHeadersAuth,
      body: rawAuth,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_BACKEND + "users/login", requestOptionsAuth)
        .then(response => response.json())
        .then(result => {
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('current_user', JSON.stringify(result.data));
        })
  }

  function handleNewTestForm(testform) {
    console.log(testform)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Testcenter-Verwaltung
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/login"> 
              <Login onLogin={login}></Login> 
            </Route>
            <Route path="/tests/create" >
              <TestForm onSubmit={handleNewTestForm}/>
            </Route>
            <PrivateRoute path="/tests/:period">
              <TestList></TestList>
            </PrivateRoute>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default Main;

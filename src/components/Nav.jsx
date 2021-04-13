// Ipmorts
import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  IconButton,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

// Navigation links
const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Contact`, path: `/contact` },
];

// Navigation links styles
const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
    "&:hover": {
      color: "white !important",
    },
  },
});

function Nav() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container className={classes.navDisplayFlex} maxWidth="lg">
            {/* Home Icon */}
            <IconButton edge="start" color="inherit" aria-lebel="home">
              <Home fontSize="large" />
            </IconButton>

            {/* Nav menu */}
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );

  // Old navBar setup // // // // //
  //
  // return (
  //   <div>
  //     <AppBar color="secondary">
  //       <ToolBar className="nav">
  //         <Typography variant="h5">
  //           <Link to="/" style={navLinkStyle}>
  //             My Teacher
  //           </Link>
  //         </Typography>
  //
  //         <section className="nav-links">
  //           <Link to="/" style={navLinkStyle}>
  //             <Button>Home</Button>
  //           </Link>
  //
  //           <Link to="/about" style={navLinkStyle}>
  //             <Button>About</Button>
  //           </Link>
  //           <Link to="/contact" style={navLinkStyle}>
  //             <Button>Contact</Button>
  //           </Link>
  //           <Link style={navLinkStyle}>
  //             <Button>Login</Button>
  //           </Link>
  //           <Link style={navLinkStyle}>
  //             <Button>Sign up</Button>
  //           </Link>
  //         </section>
  //       </ToolBar>
  //     </AppBar>
  //   </div>
  // );
  // // // // // // // // // // // //
}

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Nav() {
  
  const navLinkStyle={
    color: "white",
    textDecoration : "none"
  }
  return (
    <div>
      <AppBar color="secondary">
        <ToolBar className="nav">
          <Typography variant="h5">
            <Link to="/" style={navLinkStyle}>
              My Teacher
            </Link>
          </Typography>

          <section className="nav-links">
            <Link to="/" style={navLinkStyle}>
              <Button>Home</Button>
            </Link>

            <Link to="/about" style={navLinkStyle}>
              <Button>About</Button>
            </Link>
            <Link to="/contact" style={navLinkStyle}>
              <Button>Contact</Button>
            </Link>
            <Link style={navLinkStyle}>
              <Button>Login</Button>
            </Link>
            <Link style={navLinkStyle}>
              <Button>Sign up</Button>
            </Link>
          </section>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Nav;

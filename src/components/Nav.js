import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Nav() {
  return (
    <div>
      <AppBar color="secondary">
        <ToolBar className="nav">
          <Typography variant="h5">My Teacher</Typography>

          <section className="nav-links">
            <Button>Home</Button>
            <Button>About us</Button>
            <Button>Contact</Button>
            <Button>Log In</Button>
            <Button>Sign Up</Button>
          </section>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Nav;

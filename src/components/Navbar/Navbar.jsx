import React from 'react';
import classes from "./Navbar.module.scss"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={classes.Navbar}>
      <div className={classes.Navbarcontent}>
        <Link className={classes.linkNav} to="/aboutme">About me</Link>
        <Link className={classes.linkNav} to="/myprojects">About me</Link>
        <Link className={classes.linkNav} to="/mycontacts">About me</Link>
      </div>
    </header>
  )
}

export default Navbar
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import classes from './Layout.module.scss'

function Layout({ children }) {
  return (
    <div className={classes.Layout}>
      <Navbar/>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export default Layout
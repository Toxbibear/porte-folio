import React from 'react';
import classes from "./App.module.scss"
import { Route, Routes } from "react-router-dom";
import Main_page from "./containers/Main_page/Main_page"

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Main_page/>} />
      </Routes>
    </div>
  )
}

export default App;
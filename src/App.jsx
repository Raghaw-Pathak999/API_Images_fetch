import React from "react";
import "./App.css";
import { CustomRouter } from "./components/Routes/CoustomRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="heading"><Link className="Link" to={'/'}>Image Gallery</Link></h1>
      <CustomRouter />
    </>
  );
}

export default App;
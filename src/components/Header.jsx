import React from 'react'

import { Link } from "react-router-dom";

function Header (props) {
  return <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/params/hola">Hola</Link>
    <Link to="/params/adios">Adios</Link>
    <Link to="/posts">Forum</Link>
  </div>
}

export default Header
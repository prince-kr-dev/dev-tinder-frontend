import React from 'react'
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

function Body() {
  return (
    <> 
        <Nav/>
        <Outlet/>
    </>
  )
}

export default Body;
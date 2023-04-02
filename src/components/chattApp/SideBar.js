import React from 'react';
import Chatts from '../Chatts';
import Navbar from '../Navbar';
import Search from '../Search';
import "./chatt.css";

const SideBar = () => {
  return (
    <div className='sidebar'>
       <Navbar />
       <Search />
       <Chatts />
    </div>
  )
}

export default SideBar;
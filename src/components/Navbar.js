import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span className="logo">Lama Chat</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/6282607/pexels-photo-6282607.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> <span >John</span>
          <button>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

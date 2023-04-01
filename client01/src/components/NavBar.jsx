import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link className='brand' to="/">CarbonizeX</Link>
      </div>
      <div className="nav-middle">
        <Link className='menu' to="/">Home</Link>
        <Link className='menu' to="/myvotes">Your Votes</Link>
        <Link className='menu' to="/myreviews">Your Review</Link>
      </div>
      <div className="nav-right">
        <Link className='menu' to="/login">Login</Link>
        <p>|</p>
        <div>Logout</div>
      </div>
    </nav>
  );
}

export default Navbar;

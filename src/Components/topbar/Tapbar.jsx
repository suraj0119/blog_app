import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <>
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
              <ul className="topList">
                <li className="topListItem"><Link className='link' to="/">HOME</Link></li>
                <li className="topListItem"><Link className='link' to="/about">ABOUT</Link></li>
                <li className="topListItem"><Link className='link' to="/write">WRITE</Link></li>
                <li className="topListItem"><Link className='link' to="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link className='link' to="/">LOGOUT</Link></li>

               

              </ul>
            </div>
            <div className="topRight">
              <img className='topImg' src="https://images3.alphacoders.com/800/thumbbig-80035.webp" alt="" />
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </>
  )
}

export default Topbar
import React from 'react';
import "./header.css";
const Header = () => {
  return (
    <>
        <div className="header">
          <div className="headerTitles">
            <span className="headerTitleSm">Ema Watson</span>
            <span className="headerTitleLg">Blog</span>
          </div>
          <img src="https://images.alphacoders.com/825/82513.jpg" alt="" className="headerImg" />
        </div>
    </>
  )
}

export default Header
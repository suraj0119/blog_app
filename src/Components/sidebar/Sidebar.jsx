import React from 'react'
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
            <div className="sidebarItem">
              <span className="sidebarTitle">ABOUT ME</span>
              <img src="https://c4.wallpaperflare.com/wallpaper/498/478/483/emma-watson-women-actress-armpits-wallpaper-preview.jpg" alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas harum sequi dignissimos ad illo beatae doloribus ullam voluptatem, 
                distinctio assumenda tempora accusantium nihil animi facilis debitis possimus iusto ut.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">

              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Sports</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Movies</li>

            </ul>
            </div>

            <div className="sidebarItem">
              <span className="sidebarTitle">FOLLOW US</span>
              <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
              </div>
            </div>

        </div>
    </>
  )
}

export default Sidebar
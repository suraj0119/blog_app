import React from 'react'
import Header from '../../Components/header/Header'
import Sidebar from '../../Components/sidebar/Sidebar'
import './home.css';
import Posts from '../../Components/posts/Posts';
const Home = () => {
  return (
    <>
        <Header />
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
    </>
  )
}

export default Home
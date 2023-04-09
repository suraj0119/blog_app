import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import "./single.css"
import SinglePost from '../../Components/singlePost/SinglePost'
const Single = () => {
  return (
    <>
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    </>
  )
}

export default Single
import React from 'react'
import './post.css'

const Post = () => {
  return (
    <>
      <div className="post">
      <img src="https://images3.alphacoders.com/800/thumbbig-80035.webp" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Hey this Ema watson...
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat rem reiciendis vel. 
        Facilis fugit autem culpa, ullam quis quas, ex perferendis iure nisi sapiente soluta 
        suscipit aperiam consequatur! Recusandae, commodi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat rem reiciendis vel. 
        Facilis fugit autem culpa, ullam quis quas, ex perferendis iure nisi sapiente soluta 
        suscipit aperiam consequatur! Recusandae, commodi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat rem reiciendis vel. 
        Facilis fugit autem culpa, ullam quis quas, ex perferendis iure nisi sapiente soluta 
        suscipit aperiam consequatur! Recusandae, commodi.
      </p>
      </div>
    </>
  )
}

export default Post
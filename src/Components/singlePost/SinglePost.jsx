import React from "react";
import "./singlepost.css";
const SinglePost = () => {
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src="https://images6.alphacoders.com/615/615725.jpg"
            alt=""
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Hey... Ema Watson here...
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuther">
              {" "}
              Auther: <b>Suraj</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            eligendi exercitationem, officiis impedit, tempore temporibus ex
            ratione repellendus deserunt aperiam recusandae quaerat. Error
            tempore cumque earum iusto, repudiandae esse totam! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Maxime eligendi
            exercitationem, officiis impedit, tempore temporibus ex ratione
            repellendus deserunt aperiam recusandae quaerat. Error tempore
            cumque earum iusto, repudiandae esse totam! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Maxime eligendi exercitationem,
            officiis impedit, tempore temporibus ex ratione repellendus deserunt
            aperiam recusandae quaerat. Error tempore cumque earum iusto,
            repudiandae esse totam! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Maxime eligendi exercitationem, officiis impedit,
            tempore temporibus ex ratione repellendus deserunt aperiam
            recusandae quaerat. Error tempore cumque earum iusto, repudiandae
            esse totam! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Maxime eligendi exercitationem, officiis impedit, tempore
            temporibus ex ratione repellendus deserunt aperiam recusandae
            quaerat. Error tempore cumque earum iusto, repudiandae esse totam!
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;

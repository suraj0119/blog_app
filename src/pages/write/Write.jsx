import React from "react";
import "./write.css";
const Write = () => {
  return (
    <>
      <div className="write">
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i class="fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;

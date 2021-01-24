import React from "react";
import start from "../startButton.svg";

const AddButton = (props) => (

  <div className="add-button-wrapper">
    <label className="add-button-label"
           htmlFor="customFileAdd">
      <input type="file"
             onChange={props.onImageAdd.bind(this)}
             className="file-input"
             id="customFileAdd"
             accept=".png, .jpg, .jpeg"/>
      <img src={start} alt="" className="add-button-image"/>
    </label>
  </div>


)
export default AddButton

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../../../actions/tuits-actions";
import "./new-tuit.css"

const WhatsHappening = () => {
  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit'});
  const dispatch = useDispatch();
  return (
    <div className="pb-2">
      <div className="list-group list-group-horizontal">
        <img className="list-group-item bg-transparent border-0 rounded-circle self-img" src="/tuiter/assets/tesla.png"/>
        <textarea className="list-group-item bg-transparent wd-new-tuit bg-transparent border-0 w-100 pos-relative-nudge-up-right form-control" 
                placeholder="What's happening?"
                onChange={(event) =>
                  setNewTuit({...newTuit, tuit: event.target.value})}>
        </textarea>
      </div>
      <div className="list-group list-group-horizontal">
        <i className="fa-regular fa-image list-group-item bg-transparent border-0"/>
        <i className="fa-solid fa-arrow-trend-up list-group-item bg-transparent border-0"/>
        <i className="fa-regular fa-face-smile list-group-item bg-transparent border-0"/>
        <i className="fa-regular fa-calendar list-group-item bg-transparent border-0"/>
        <button className="btn btn-primary btn-block rounded-pill" onClick={() => createTuit(dispatch, newTuit)}>
          Tuit
        </button>
      </div>
    </div>
  );
}
export default WhatsHappening;
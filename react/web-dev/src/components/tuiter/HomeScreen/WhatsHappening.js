import React, {useState} from "react";
import { useDispatch } from "react-redux";
import "./new-tuit.css"

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
      dispatch({type:'create-tuit', tuit:whatsHappening})
    console.log(whatsHappening);
  }
  return (
    <div className="pb-2">
      <div className="list-group list-group-horizontal">
        <img className="list-group-item bg-transparent border-0 rounded-circle self-img" src="/tuiter/assets/tesla.png"/>
        <textarea className="list-group-item bg-transparent wd-new-tuit bg-transparent border-0 w-100 pos-relative-nudge-up-right" 
        value={whatsHappening}
                placeholder="What's happening?"
                onChange={(event) =>
          setWhatsHappening(event.target.value)}>
        </textarea>
      </div>
      <div className="list-group list-group-horizontal">
        <i className="fa-regular fa-image list-group-item bg-transparent border-0"/>
        <i className="fa-solid fa-arrow-trend-up list-group-item bg-transparent border-0"/>
        <i className="fa-regular fa-face-smile list-group-item bg-transparent border-0"/>
        <i className="fa-regular fa-calendar list-group-item bg-transparent border-0"/>
        <button className="btn btn-primary btn-block rounded-pill" onClick={tuitClickHandler}>
          Tuit
        </button>
      </div>
    </div>
  );
}
export default WhatsHappening;
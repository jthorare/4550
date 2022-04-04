import {useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import * as service from "../../../services/tuits-service.js"
import TuitListItem from "./TuitListItem";
import {findAllTuits} from "../../../actions/tuits-actions.js"
const TuitList = () => {
  var tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {findAllTuits(dispatch)}, []);
  return (
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit =>
          <TuitListItem key={tuit._id}
                        tuit={tuit}/>)
      }
    </ul>
  );
}

export default TuitList;
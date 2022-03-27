import "./tuit.css"
import { useDispatch } from "react-redux";
import TuitStats from "./TuitStats";
const TuitListItem = (
            {tuit = {
            "_id": "123",
            "topic": "Web Development",
            "postedBy": {
                "username": "ReactJS"
            },
            "liked": true,
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "attachments": {
                "video": "unKvMC3Y1kI"
            },
            "logo-image": "/tuiter/react-blue.png",
            "avatar-image": "/tuiter/react-blue.png",
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
            }
        }
) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: "delete-tuit", tuit})
    };
    return(
        <>

        <div className="wd-home-bookmark list-group-item">
            <i onClick={() => deleteTuit(tuit)} className="fas fa-remove fa-2x fa-pull-right"/>
            <img className="wd-home-avatar" src={tuit["avatar-image"]}/>
            <div className="wd-home-user-info">
                <p className="wd-home-username">{tuit.postedBy.username}</p>
                <p className="wd-home-handle">@{tuit.handle}</p>
                <p className="wd-home-timestamp">- {tuit.time}</p>
            </div>
            <div className="wd-home-content">
                <p>{tuit.tuit}</p>
            </div>
            <div className="wd-home-snapshot">
                {tuit.attachments && tuit.attachments.image && <img className="wd-home-image" src={tuit.attachments.image}/>}
                {tuit.attachments && tuit.attachments.video && <video className="wd-home-image" src={tuit.attachments.video}/>}
                {tuit.title && <div className="wd-home-snapshot-title">{tuit.title}</div> }
            </div>
           <TuitStats tuit={tuit}/> 
        </div>
        </>
    )
}

export default TuitListItem;
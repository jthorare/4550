import { useDispatch } from "react-redux";

const TuitStats = ({tuit = {
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
            "logo-image": "/tuiter/react.png",
            "avatar-image": "/tuiter/react.png",
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
            }
        }) => {
            const dispatch = useDispatch();
            const likeTuit = () => {dispatch({type: 'like-tuit', tuit});};
    return(
        <div className="wd-icons">
            <a className="wd-share-thread" href="#">
                <i className="fa-regular fa-comment wd-share-thread-icon"></i>
                <label>{tuit.stats.comments}</label>
            </a>
            <a className="wd-retweet" href="#">
                <i className="fa-solid fa-retweet wd-retweet-icon"></i>
                <label>{tuit.stats.retuits}</label>
            </a>
            <a className="wd-like" href="#" onClick={likeTuit}>
                {tuit.liked &&
                    <i className="fas fa-heart wd-like-icon" style={{color: "#e26076"}}></i>
                }
                {!tuit.liked && 
                    <i className="fa-regular fa-heart wd-like-icon"></i>
                }
                <label>{tuit.stats.likes}</label>
            </a>
            <a className="wd-share-thread" href="#">
                <i className="fa-solid fa-arrow-up-from-bracket wd-share-thread-icon"></i>
            </a>
        </div>);
}

export default TuitStats;
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
            "logo-image": "../../../images/react-blue.png",
            "avatar-image": "../../../images/react-blue.png",
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
            }
        }
) => {
    return(
        <>
            <div className="list-group-item wd-home-tuit">
            {tuit["avatar-image"] && (
                <image classNameName="wd-avatar-img" alt="image" src={tuit["avatar-image"]} />
            )}
            <div>
                {tuit.postedBy.username && <label className="wd-title">{tuit.postedBy.username}</label>}
                {tuit.handle && <label classNameName="wd-topic">@{tuit.handle}</label>}
                {tuit.time && <label className="wd-timestamp">- {tuit.time}</label>}
            </div>
            {tuit.title && <div className="wd-content">{tuit.tuit}</div>}
            </div>
            <div className="wd-tuit-img"></div>
            <div className="wd-tuit-stats">

            </div>
        </>
    )
}

export default TuitListItem;
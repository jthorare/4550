const TuitStats = (tuit) => {
<div className="wd-icons">
                <a className="wd-share-thread" href="#">
                    <i className="fa-regular fa-comment wd-share-thread-icon"></i>
                    <label>{tuit.stats.comments}</label>
                </a>
                <a className="wd-retweet" href="#">
                    <i className="fa-solid fa-retweet wd-retweet-icon"></i>
                    <label>{tuit.stats.retuits}</label>
                </a>
                <a className="wd-like" href="#">
                    <i className="fa-regular fa-heart wd-like-icon"></i>
                    <label>{tuit.stats.likes}</label>
                </a>
                <a className="wd-share-thread" href="#">
                    <i className="fa-solid fa-arrow-up-from-bracket wd-share-thread-icon"></i>
                </a>
            </div>
}

export default TuitStats;
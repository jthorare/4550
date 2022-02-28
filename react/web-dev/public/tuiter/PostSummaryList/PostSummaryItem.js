/**
 *
 * @param post [{ topic: ..., username: ..., time: ..., image: ..., title: ... }]
 * @constructor
 */
const PostSummaryItem = (post) => { // post is an object of form
                                    // { topic: ..., username: ..., time: ..., image: ..., title: ..., tuits: }
    return (`                <div className="wd-suggested-post">
                                ${PostSummaryItemImage(post.image)}
                                ${PostSummaryItemFiller(post.topic)}
                                <div>
                                    ${PostSummaryItemUserName(post.userName)}
                                    ${PostSummaryItemTimeStamp(post.time)}
                                </div>
                                ${PostSummaryItemTitle(post.title)}
                                ${PostSummaryItemFiller(post.tweets)}
                </div>
          `);

}

const PostSummaryItemFiller = (topic) => {
    if(topic) {
         return (`<div className="wd-suggested-filler">
             ${topic}
        </div>`);
    }
}

const PostSummaryItemTitle = (title) => {
    if(title) {
        return (`<div className="wd-content">
            ${title}
        </div>`);
    }
}
const PostSummaryItemUserName = (userName) => {
    if(userName) {
        return (`<label className="wd-title">${userName}</label>
        `);
    }
}

const PostSummaryItemTimeStamp = (ts) => {
    if(ts) {
        return (`<label className="wd-timestamp">${ts}</label>
        `);
    }
}

const PostSummaryItemImage = (img) => {
    console.log(img);
    if(img) {
       return(`<img className="wd-float-right-img" src="${img}">`);
    }
}

export default PostSummaryItem;
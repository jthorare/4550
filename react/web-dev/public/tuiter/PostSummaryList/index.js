import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return (`
        <div class="w-100 wd-suggested-section" id="SUGGESTED">
            ${posts.map(post => PostSummaryItem(post)).join("")}
        </div>
    `);
}

export default PostSummaryList;
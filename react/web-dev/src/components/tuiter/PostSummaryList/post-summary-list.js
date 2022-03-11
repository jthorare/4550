import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json";
const PostSummaryList = ({ posts }) => {
  return (
    <div class="w-100 wd-suggested-section list-group" id="SUGGESTED">
      {posts.map((post) => <PostSummaryItem post={post} />).join("")}
    </div>
  );
};

export default PostSummaryList;

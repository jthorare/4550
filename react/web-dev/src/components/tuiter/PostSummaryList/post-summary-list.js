import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json";
const PostSummaryList = () => {
  return (
    <div class="w-100 wd-suggested-section list-group" id="SUGGESTED">
      {posts.map((post) => (
        <PostSummaryItem post={post} />
      ))}
    </div>
  );
};

export default PostSummaryList;

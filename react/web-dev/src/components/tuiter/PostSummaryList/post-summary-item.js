const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../../assets/react-blue.png",
  },
}) => {
  return (
    <div class="list-group-item wd-suggested-post">
      {post.image && <div className="wd-float-right-img" src={post.image} />}
      {post.topic.length > 0 && (
        <div class="wd-suggested-filler">{post.topic}</div>
      )}
      <div>
        {post.userName && <label class="wd-title">{post.userName}</label>}
        {post.time && <label class="wd-timestamp">- {post.time}</label>}
      </div>
      {post.title && <div class="wd-content">{post.title}</div>}
      {post.topic && <div class="wd-suggested-filler">{post.topic}</div>}
    </div>
  );
};
export default PostSummaryItem;

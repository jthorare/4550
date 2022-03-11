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
      <PostSummaryItemImage img={post.image} />$
      <PostSummaryItemFiller topic={post.topic} />
      <div>
        <PostSummaryItemUserName userName={post.userName} />
        <PostSummaryItemTimeStamp ts={post.time} />
      </div>
      <PostSummaryItemTitle title={post.title} />
      <PostSummaryItemFiller topic={post.tuits} />
    </div>
  );
};

const PostSummaryItemFiller = (topic) => {
  if (topic) {
    return <div class="wd-suggested-filler">{topic}</div>;
  }
};

const PostSummaryItemTitle = (title) => {
  if (title) {
    return <div class="wd-content">{title}</div>;
  }
};
const PostSummaryItemUserName = (userName) => {
  if (userName) {
    return <label class="wd-title">{userName}</label>;
  }
};

const PostSummaryItemTimeStamp = (ts) => {
  if (ts) {
    return <label class="wd-timestamp">- {ts}</label>;
  }
};

const PostSummaryItemImage = (img) => {
  console.log(img);
  if (img) {
    return <img class="wd-float-right-img" src="{img}" />;
  }
};

export default PostSummaryItem;

const PostSummaryItem = (
  post = { topic, userName, time, image, title, tuits }
) => {
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

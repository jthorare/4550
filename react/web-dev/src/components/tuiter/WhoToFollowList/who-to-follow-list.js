import WhoToFollowListItem from "./who-to-follow-list-item.js";
import who from "./who.json";
const WhoToFollowList = () => {
  return (
    <>
      <div class="list-group follow-list">
        {who.map((item) => {
          return <WhoToFollowListItem who={item} />;
        })}
      </div>
    </>
  );
};

export default WhoToFollowList;

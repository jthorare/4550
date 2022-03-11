import WhoToFollowListItem from "./who-to-follow-list-item.js";
import who from "./who.json";

const WhoToFollowList = () => {
  return (
    <div class="list-group follow-list">
      {who
        .map((followListItem) => {
          return <WhoToFollowListItem who={followListItem} />;
        })
        .join("")}
    </div>
  );
};

export default WhoToFollowList;

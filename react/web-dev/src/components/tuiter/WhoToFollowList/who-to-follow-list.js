import WhoToFollowListItem from "./who-to-follow-list-item.js";
import who from "./who.js";

const WhoToFollowList = ({ who }) => {
  return (
    <div class="list-group follow-list">
      {who
        .map((followListItem) => {
          return <WhoToFollowListItem who={who} />;
        })
        .join("")}
    </div>
  );
};

export default WhoToFollowList;

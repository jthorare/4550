import { useSelector } from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item.js";
const WhoToFollowList = () => {
  const who = useSelector(state => state.who);
  return (
    <>
      <div className="list-group follow-list">
        {who.map((item) => {
          return <WhoToFollowListItem who={item} />;
        })}
      </div>
    </>
  );
};

export default WhoToFollowList;

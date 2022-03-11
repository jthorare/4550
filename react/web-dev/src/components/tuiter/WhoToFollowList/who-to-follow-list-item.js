const WhoToFollowListItem = (who = { avatarIcon, userName, handle }) => {
  // who is an object of form { avatarIcon: ..., userName: ..., handle: ... }
  return (
    <>
      <div class="list-group-item follow position-relative">
        <img
          className="float-start rounded-circle"
          src="assets/${who.avatarIcon}"
        />
        <div className="">
          <div>{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <a class="btn btn-primary btn-block rounded-pill ">Follow</a>
      </div>
    </>
  );
};

export default WhoToFollowListItem;

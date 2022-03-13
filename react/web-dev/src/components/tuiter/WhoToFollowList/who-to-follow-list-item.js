const WhoToFollowListItem = ({
  who = {
    avatarIcon: "assets/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <>
      <div class="list-group-item follow position-relative">
        <img
          className="float-start rounded-circle"
          alt="image"
          src={who.avatarIcon}
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

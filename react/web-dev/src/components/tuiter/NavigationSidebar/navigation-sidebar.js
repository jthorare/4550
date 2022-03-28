const NavigationSidebar = () => {
  return (
    <>
      <div className="wd-lights-out-text d-inline-block list-group">
        <a className="list-group-item" href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="/"
          className=" list-group-item list-group-item-action "
        >
          <i className="fa fa-home"></i>
          <label className="d-none d-lg-inline">Home</label>
        </a>
        <a href="/tuiter/explore" className=" list-group-item list-group-item-action ">
          <i className="fa-solid fa-hashtag"></i>
          <label className="d-none d-lg-inline">Explore</label>
        </a>
        <a href="#" className=" list-group-item list-group-item-action ">
          <i className="fa-solid fa-bell"></i>
          <label className="d-none d-lg-inline">Notifications</label>
        </a>
        <a href="#" className=" list-group-item list-group-item-action ">
          <i className="fa-solid fa-envelope"></i>
          <label className="d-none d-lg-inline">Messages</label>
        </a>
        <a href="#" className=" list-group-item list-group-item-action ">
          <i className="fa-solid fa-bookmark"></i>
          <label className="d-none d-lg-inline">Bookmarks</label>
        </a>
        <a href="#" className=" list-group-item list-group-item-action ">
          <i className="fa-solid fa-list"></i>
          <label className="d-none d-lg-inline">Lists</label>
        </a>
        <a
          href="./profile.html"
          className=" list-group-item list-group-item-action "
        >
          <i className="fa-solid fa-user"></i>
          <label className="d-none d-lg-inline">Profile</label>
        </a>
        <a
          href="./edit-profile.html"
          className=" list-group-item list-group-item-action "
        >
          <i className="fa-solid fa-ellipsis"></i>
          <label className="d-none d-lg-inline">More</label>
        </a>
      </div>
      <div className="d-grid mt-2 d-inline-block w-75">
        <a href="tuit.html" className="btn btn-primary btn-block rounded-pill">
          Tuit
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;

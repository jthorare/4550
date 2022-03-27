import PostSummaryList from "../PostSummaryList";
import "./explore.css";

const ExploreComponent = () => {
  return (
    <>
      <div className=" position-relative h-auto">
        <i className="fa fa-search position-absolute" id="MAG-GLASS"></i>
        <input
          className="wd-rounded-corners-all-around wd-bg-color-dark-grey text-white  d-flex align-items-center"
          id="search"
          placeholder="Search Tuiter"
          type="text"
        />
        <a
          href="explore-settings.html"
          className="position-absolute end-0"
          id="cog"
        >
          <i className="fa-solid fa-gear wd-blue"></i>
        </a>
      </div>

      <div className=" pt-1 pb-1 ps-0 pe-0 list-group list-group-horizontal ">
        <button
          className="text-nowrap wd-linkset list-group-item"
          href="for-you.html"
        >
          For you
        </button>
        <button
          className="text-nowrap wd-linkset list-group-item"
          href="trending.html"
        >
          Trending
        </button>
        <button
          className="text-nowrap  wd-linkset list-group-item"
          href="news.html"
        >
          News
        </button>
        <button
          className="text-nowrap wd-linkset list-group-item"
          href="sports.html"
        >
          Sports
        </button>
        <button
          className="text-nowrap wd-linkset list-group-item"
          href="entertainment.html"
        >
          Entertainment
        </button>
      </div>
      <div className="w-100 wd-suggested-section" id="SUGGESTED">
        <div className="w-100 wd-suggested-post">
          <img className="w-100" src="/tuiter/assets/starship.png" />
        </div>
        <PostSummaryList />
      </div>
    </>
  );
};
export default ExploreComponent;

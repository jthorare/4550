import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return (
    <>
      <div class=" position-relative h-auto">
        <i class="fa fa-search position-absolute" id="MAG-GLASS"></i>
        <input
          class="wd-rounded-corners-all-around wd-bg-color-dark-grey text-white  d-flex align-items-center"
          id="search"
          placeholder="Search Tuiter"
          type="text"
        />
        <a
          href="explore-settings.html"
          class="position-absolute end-0"
          id="cog"
        >
          <i class="fa-solid fa-gear wd-blue"></i>
        </a>
      </div>

      <div class=" pt-1 pb-1 ps-0 pe-0 list-group list-group-horizontal ">
        <button
          class="text-nowrap wd-linkset list-group-item"
          href="for-you.html"
        >
          For you
        </button>
        <button
          class="text-nowrap wd-linkset list-group-item"
          href="trending.html"
        >
          Trending
        </button>
        <button
          class="text-nowrap  wd-linkset list-group-item"
          href="news.html"
        >
          News
        </button>
        <button
          class="text-nowrap wd-linkset list-group-item"
          href="sports.html"
        >
          Sports
        </button>
        <button
          class="text-nowrap wd-linkset list-group-item"
          href="entertainment.html"
        >
          Entertainment
        </button>
      </div>
      <div class="w-100 wd-suggested-section" id="SUGGESTED">
        <div class="w-100 wd-suggested-post">
          <img class="w-100" src="/tuiter/assets/starship.png" />
        </div>
        <PostSummaryList />
      </div>
    </>
  );
};
export default ExploreComponent;

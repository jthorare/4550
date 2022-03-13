import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent";
import "./explore.css";
const ExploreScreen = () => {
  return (
    <>
      <div class="container pb-1" id="wd-explore">
        <div class="row mt-2">
          <div class="col-2 col-md-2 col-lg-2 col-xl-2">
            <NavigationSidebar />
          </div>
          <div class="col-9 col-lg-6 d-inline-block">
            <ExploreComponent />
          </div>
          <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreScreen;

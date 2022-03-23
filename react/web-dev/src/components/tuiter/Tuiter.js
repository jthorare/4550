import React from "react";
import {Outlet} from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import WhoToFollowList from "./WhoToFollowList"
import NavigationSidebar from "./NavigationSidebar"
import whoReducer from "./reducers/who-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(whoReducer);

const Tuiter = () => {
  return (
    <>
      <Provider store={store}>
        <div class="container pb-1" id="wd-explore">
            <div class="row mt-2">
              <div class="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar />
              </div>
              <div class="col-9 col-lg-6 d-inline-block">
                <Outlet/>
              </div>
              <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList />
              </div>
            </div>
          </div>
        </Provider>
      </>
    );
  };
export default Tuiter;

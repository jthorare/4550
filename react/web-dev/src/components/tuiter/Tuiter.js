import React from "react";
import {Outlet} from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import WhoToFollowList from "./WhoToFollowList"
import NavigationSidebar from "./NavigationSidebar"
import whoReducer from "./reducers/who-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";

const reducers = combineReducers({who: whoReducer, tuits: tuitsReducer});
const store = createStore(reducers);

const Tuiter = () => {
  return (
    <>
      <Provider store={store}>
        <div className="container pb-1" id="wd-explore">
            <div className="row mt-2">
              <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar />
              </div>
              <div className="col-9 col-lg-6 d-inline-block">
                <Outlet/>
              </div>
              <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList />
              </div>
            </div>
          </div>
        </Provider>
      </>
    );
  };
export default Tuiter;

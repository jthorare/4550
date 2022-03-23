import "./vendors/bootstrap.min.css";
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreComponent from "./components/tuiter/ExploreScreen"
import HomeScreen from "./components/tuiter/HomeScreen"
function App() {
  //<Route path="notifications" 
  //element={<NotificationScreen/>}/>
  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
         <Route path="/">
           <Route path="labs"
                  element={<Labs/>}/>
           <Route path="hello"
                  element={<HelloWorld/>}/>
           <Route path="tuiter"
                  element={<Tuiter/>}>
             <Route index
                    element={<HomeScreen/>}/>
             <Route path="explore"
                    element={<ExploreComponent/>}/>
             
           </Route>
         </Route>
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

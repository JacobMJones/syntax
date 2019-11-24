import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../Constants/routes";
import LandingPage from "../../Pages/LandingPage";
import SearchPage from "../../Pages/SearchPage";

function Layout() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SEARCH} component={SearchPage}/>
        </div>
      </Router>
    </React.Fragment>
  );
}
export default Layout;

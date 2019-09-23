import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../Constants/routes";
import LandingPage from "../../Pages/LandingPage";
import ReadPage from "../../Pages/ReadPage";
import WritePage from "../../Pages/WritePage";

function Layout() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.READ} component={ReadPage} />
          <Route path={ROUTES.WRITE} component={WritePage} />
        </div>
      </Router>
    </React.Fragment>
  );
}
export default Layout;

import React from "react";
import history from "./utils/history";
import { Route, Router } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Campaigns from "./views/Campaigns";
import PublicRoute from "./routes/PublicRoute";
import Donate from "./views/Donate";
import About from "./views/About";
import ContactUs from "./views/ContactUs";
import SignIn from "./views/SignIn";

function App() {
  const isAuth = false;
  return (
    <Router history={history}>
      <Route exact path={"/"} component={LandingPage} />
      <PublicRoute exact path={"/home"} component={LandingPage} />
      <PublicRoute
        auth={isAuth}
        exact
        path={"/campaigns"}
        component={Campaigns}
      />
      <PublicRoute auth={isAuth} path={"/donate"} component={Donate} />
      <PublicRoute auth={isAuth} path={"/about"} component={About} />
      <PublicRoute auth={isAuth} path={"/contact"} component={ContactUs} />
      <PublicRoute auth={isAuth} path={"/signIn"} component={SignIn} />
    </Router>
  );
}

export default App;

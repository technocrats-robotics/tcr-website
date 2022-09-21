import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as React from "react";

// components
import LandingPage from "./pages/LandingPage.jsx";
import AdminPanel from "./adminPanel/AdminPanel.jsx";
import UserPanel from "./userPanel/UserPanel";
import Blogs from "./pages/Blog";
import TeamMembers from "./pages/TeamMembers";
import Acheivements from "./components/Acheivements";
import Developers from "./pages/Developers";
// import Recruitments from "./pages/Recruitments/Recruitments";

// CSS
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <div className="loadScreen">
        <Icon size="massive" color="red" loading name="spinner" />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/adminPanel" component={AdminPanel} />
          <Route path="/userPanel" component={UserPanel} />
          <Route exact path="/developers" component={Developers} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/team" component={TeamMembers} />
          <Route exact path="/acheivements" component={Acheivements} />
          {/* <Route exact path="/recruitments" component={Recruitments} /> */}
          <script src="/node_modules/rive-canvas/rive.js"></script>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

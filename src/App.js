import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// components
import LandingPage from './pages/landingPage/LandingPage.jsx';
import AdminPanel from './adminPanel/AdminPanel';
import UserPanel from './userPanel/UserPanel';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/blog/Blog';
import Team from './pages/about_us/TeamMembers'

// CSS
import './App.css';
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/adminPanel" component={AdminPanel} />
          <Route path="/userPanel" component={UserPanel} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/Team" component={Team} />
          <script src="/node_modules/rive-canvas/rive.js"></script> 
        </Switch>
      </Router>
    </div>
  );
}
export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// components
import LandingPage from './pages/landingPage/LandingPage.jsx';
import AdminPanel from './adminPanel/AdminPanel';
import UserPanel from './userPanel/UserPanel';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/blog/Blog';
import Team from './pages/about_us/TeamMembers'
import Acheivements from './components/about_us/Acheivements'
import Recruitments from './pages/Recruitments/Recruitments'
import Developers from './pages/about_us/Developers'

// CSS
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Icon} from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
       <div className='loadScreen'>
    <Icon size='massive' color='red' loading name='spinner' />
    </div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/adminPanel" component={AdminPanel} />
          <Route path="/userPanel" component={UserPanel} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/developers" component={Developers} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/acheivements" component={Acheivements} />
          {/* <Route exact path="/recruitments" component={Recruitments} /> */}
          <script src="/node_modules/rive-canvas/rive.js"></script> 
        </Switch>
      </Router>
    </div>
  );
}
export default App;

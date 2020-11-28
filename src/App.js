import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// components
import LandingPage from './pages/landingPage/LandingPage.jsx';
import AdminPanel from './adminPanel/AdminPanel';

// CSS
import './App.css';
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact paht="/adminLogin" component={AdminPanel} />
      </Switch>
    </Router>
    </div>
  );
}
export default App;

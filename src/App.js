import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Redirect from "./pages/Redirect";
import "./styles/main.css";
import "./styles/scrollbar.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />

        <Route exact path="/github">
          <Redirect url="https://github.com/mdxyasir" /> 
        </Route>

        <Route exact path="/art">
          <Redirect url="https://deviantart.com/mdxyasir" /> 
        </Route>

        <Route exact path="/discord">
          <Redirect url="https://discord.com/users/813725007078752266" /> 
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
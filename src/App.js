import {BrowserRouter as Router, Switch, Route, HashRouter} from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Footer from "./components/Footer/index";
import NavBar from "./components/Navbar/index"
import Skills from "./components/Skills/index"
import Works from "./components/Works/index"
import Contact from "./components/Conatct/index"
import Particles from './components/Particles/index'



import './App.css';

function App() {
  return (
    <HashRouter>
        <div className="app">
          <NavBar/>
          {/* <Particles/> */}
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/skills" component={Skills}/>
              <Route exact path="/works" component={Works}/>
              <Route exact path="/contact" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
    </HashRouter>
    
  );
}

export default App;

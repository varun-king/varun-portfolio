import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
    <Router>
        <div className="app">
          <NavBar/>
          <Particles
            // params={{
            //     particles:{
            //     number:{
            //         value:30,
            //         density:{
            //         enable:true, 
            //         value_area:900
            //         }
            //     },
            //     "color": {
            //       "value": "#383e56"
            //     },
            //     line_linked: {
            //       shadow: {
                   
            //         color: "#383e56",
                    
            //       }
            //     }
            //     }
            // }}
       
            />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/skills" component={Skills}/>
              <Route exact path="/works" component={Works}/>
              <Route exact path="/contact" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
    </Router>
    
  );
}

export default App;

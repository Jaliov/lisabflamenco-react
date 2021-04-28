import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Gallery from "./components/Gallery";
// import Gallery2 from "./components/Gallery2";
// import Choreography from "./components/Choreography";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Press from './components/Press';
import Bio from './components/Bio';

const App = () => {
 
return (
  <div>
    <Router basename="/Home">
      <main>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      {/* <Route exact path="/gallery2" component={Gallery2} /> */}
      {/* <Route exact path="/choreography" component={Choreography} /> */}
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/press" component={Press} />
     
     </main>
    </Router>
    
    </div>
)
}
export default App;
 
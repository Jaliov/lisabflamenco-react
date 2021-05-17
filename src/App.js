import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App-min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './components/Gallery';
import Notable from './components/Notable';
import Choreography from './components/Choreography';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Press from './components/Press';
import Bio from './components/Bio';
import Classes from './components/Classes';
import Events from './components/Events';
import VideoGallery from './components/VideoGallery';

const App = () => {
  return (
    <>
    <Navbar />
     <Router>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/notable' component={Notable} />
          <Route path='/choreography' component={Choreography} />
          <Route path='/bio' component={Bio} />
          <Route path='/press' component={Press} />
          <Route path='/classes' component={Classes} />
          <Route path='/events' component={Events} />
          <Route path='/videogallery' component={VideoGallery} />
          </Switch>
      </Router>
      </>
  );
};
export default App;

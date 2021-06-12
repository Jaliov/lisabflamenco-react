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
     <Router>
     <Navbar />
          <Switch>
          <Route exact path='/'><Home /> </Route >
          <Route path='/gallery'> <Gallery /></Route >
          <Route path='/choreography'> <Choreography /></Route> 
          <Route path='/notable'> <Notable /></Route> 
          <Route path='/videogallery' component={VideoGallery} />
          <Route path='/bio'> <Bio /></Route> 
          <Route path='/press'> <Press /></Route> 
          <Route path='/classes'><Classes/></Route> 
          <Route path='/events'><Events /></Route> 
       
          </Switch>
      </Router>
      </>
  );
};
export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Classes from "./components/Classes";

import VideoGallery from "./components/VideoGallery";
import "./App.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
import Notable from "./components/Notable";
import Choreography from "./components/Choreography";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Press from "./components/Press";
import Bio from "./components/Bio";
import Events from "./components/Events";

import Lightbox3 from "./components/Lightbox3";
// import Lightbox from "yet-another-react-lightbox";

const App = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover Lisa Botalico, acclaimed Flamenco dancer, dance and music of Spain"
        />
        <meta
          name="keywords"
          content="Lisa Botalico, Lisa Bottalico Flamenco, Lisa Botalico Flamenco, Lisa Flamenco, lisabflamenco, Flamenco Classes, Flamenco Instruction, Spanish Dance, Choreography"
        />
      </Helmet>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />{" "}
          </Route>
          <Route path="/gallery">
            {" "}
            <Gallery />
          </Route>
          <Route path="/choreography">
            {" "}
            <Choreography />
          </Route>
          <Route path="/notable">
            {" "}
            <Notable />
          </Route>
          <Route path="/videogallery" component={VideoGallery} />
          <Route path="/bio">
            {" "}
            <Bio />
          </Route>
          <Route path="/press">
            {" "}
            <Press />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/events">
            <Events />
          </Route>

          <Route path="/Lightbox3">
            <Lightbox3 />
          </Route>
        </Switch>
        {/* </Navbar> */}
      </Router>
    </>
  );
};
export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Classes from "./components/Classes.js";

import VideoGallery from "./components/VideoGallery.js";
import "./App.min.css";
// import { ParallaxProvider } from "react-scroll-parallax";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery.js";
import Notable from "./components/Notable.js";
import Choreography from "./components/Choreography.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Press from "./components/Press.js";
import Bio from "./components/Bio.js";
import Events from "./components/Events.js";

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
          <Route path="/photoalbum">
            <Events />
          </Route>
        </Switch>
        {/* </Navbar> */}
      </Router>
    </>
  );
};
export default App;

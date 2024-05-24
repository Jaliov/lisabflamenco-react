import React from "react";
import { Helmet } from "react-helmet";
import Homephoto from "./Homephoto";
import cover from "../assets/ShawlintheAirfade.png";
import { Container, Row, Col } from "react-bootstrap";
//import Modal from "react-bootstrap/Modal";
import Modal from "./Modal";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Discover Lisa Botalico, acclaimed Flamenco dancer, dance and music of Spain"
        />
      </Helmet>

      <div>
        <Container className="container-fluid" id="noscroll">
          <Row>
            <Col></Col>
            <Col md={5}>
              <div>
                <h1>
                  <em>Lisa Botalico </em>
                </h1>
              </div>

              <div>
                <p className="larger text-light opening">
                  <em>
                    ...danced and sang with her head thrown back, her energy
                    seemingly unquenchable. <br />
                  </em>
                  <small>(Star Ledger)</small>
                </p>
              </div>
              <div className="fade-in-image centered">
                <Modal />

                <Homephoto cover={cover} id="cover" />
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Home;

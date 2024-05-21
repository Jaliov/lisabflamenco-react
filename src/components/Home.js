import React from "react";
import { Helmet } from "react-helmet";
import Homephoto from "./Homephoto";
import cover from "../assets/ShawlintheAirfade.png";
import { Container, Row, Col } from "react-bootstrap";

//import Modal from "react-bootstrap/Modal";
import Modal from "./Modal";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover Lisa Botalico, acclaimed Flamenco dancer, dance and music of Spain"
        />
      </Helmet>

      <Container className="container-fluid">
        <div className="home">
          <h1>
            <em>Lisa Botalico </em>
          </h1>
        </div>
        <Row>
          {/* <Col md={4}></Col> */}
          <div className="centered">
            <Col md={5}>
              <div>
                <p className="larger text-light opening">
                  <em>
                    ...danced and sang with her head thrown back, her energy
                    seemingly unquenchable. <br />
                  </em>
                  <small>(Star Ledger)</small>
                </p>
              </div>
              <div className="fade-in-image">
                <div>
                  <Modal />
                </div>
                <Homephoto cover={cover} />
              </div>
            </Col>
          </div>
          {/* <Col md={4}></Col> */}
        </Row>
      </Container>
    </>
  );
};
export default Home;

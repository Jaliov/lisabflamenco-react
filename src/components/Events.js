import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Card, Alert } from "react-bootstrap";
import AddEvent from "./AddEvent";
import UsefulLinks from "./UsefulLinks";

const Events = () => {
  return (
    <div>
      <Helmet>
        <title>Upcoming Events</title>
        <meta
          name="description"
          content="Don't miss out on Lisa Botalico's Upcoming Events!"
        />
      </Helmet>

      <Container className="container-fluid">
        <h1 class="home" style={{ textAlign: "center" }}>
          Events/Links
        </h1>
        <Row>
          <Alert variant={"transparent text-light bg-transparent"} id="alert">
            For Information about Performances & Classes:{" "}
            <Alert.Link href="mailto:lisasolea@aol.com"> email</Alert.Link>
          </Alert>

          <Card className="bg-transparent text-light">
            <Card.Body>
              <Card.Title className="text-light home">
                Upcoming Events{" "}
              </Card.Title>
              <AddEvent />
            </Card.Body>
          </Card>
          <Card className="bg-transparent text-light home">
            <Card.Body>
              <Card.Title className="home">Important Links</Card.Title>

              <UsefulLinks></UsefulLinks>
              {/* <p>
                  <em style={{ color: '#FFFFCC' }}>
                    Lisa teaches students at Rutgers University, Feb, 2015.
                    Scroll to Page 5 for article below
                  </em>
                </p> */}
              {/* <div
                  data-configid='0/11648128'
                  style={{
                    marginTop: '0px',
                    marginLeft: '70px',
                    paddingTop: '0px',
                    width: '525px',
                    height: '397px',
                    paddingBottom: '10px',
                    className: 'issuuembed',
                  }}
                ></div> */}
            </Card.Body>
          </Card>
          <br />
          {/* Start of SimpleHitCounter Code */}
          <div align="left" className="home">
            <a href="https://www.free-website-hit-counter.com">
              <img
                src="https://www.free-website-hit-counter.com/c.php?d=9&id=148080&s=288"
                border="0"
                alt="Free Website Hit Counter"
              ></img>
            </a>
            <br />
            <small>
              <a
                style={{ color: "red" }}
                href="https://www.free-website-hit-counter.com"
                title="Free Website Hit Counter"
              >
                Free website hit counter
              </a>
            </small>
          </div>
          {/* End of SimpleHitCounter Code */}
        </Row>
      </Container>
    </div>
  );
};

export default Events;

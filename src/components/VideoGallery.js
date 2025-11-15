import React from "react";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import { Container, Row, Col, Card } from "react-bootstrap";
import Iframe from "react-iframe";
// import InstagramEmbed from "react-instagram-embed";
const cardStyle = {
  width: "100%",
  height: "350px",
  boxShadow: "5px 3px 3px rgb(217, 83, 79, 0.5)",
  marginBottom: "10%",
  animationName: "moveInLeft",
  animationDuration: "5s",
};
const vidUrl1 = "https://www.youtube.com/embed/Wwou3GZ4tZ8";
const vidUrl5 = "https://www.youtube.com/watch?v=ATX9Rd2WBUo";
const vidUrl2 =
  "https://drive.google.com/file/d/1jwRTAuRNkzQic8W-n1sLDLakh0KD3zux/preview";
const vidUrl3 = "https://www.youtube.com/embed/XwbXa1TTUw4";
const vidUr14 = "https://youtu.be/jiOMTIdLHSM?si=O0dZpkOsD8MxKUPq?start=3188";

const VideoGallery = () => {
  return (
    <>
      <Helmet>
        <title>Videos</title>
        <meta
          name="description"
          content="Check out these Awesome Videos of Lisa Botalico!"
        />
      </Helmet>
      <Container>
        <h1 className="bio home" style={{ textAlign: "center" }}>
          Videos!
        </h1>
        <Row>
          <Col md={5}>
            <Card
              className="bg-dark text-light video-animate"
              key={Iframe.id}
              style={cardStyle}
            >
              <ReactPlayer
                url={vidUrl1}
                width={cardStyle.width}
                controls={true}
                className="border border-secondary"
                origin="window.location.host"
                alt="Lisa as Juana la Loca"
              />
              <Card.Body>
                <Card.Text>
                  Lisa as Juana la Loca in Alborada's <em>Trail of Gold </em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} />
          <Col md={5}>
            <Card
              className="bg-dark text-light"
              key={Iframe.id}
              style={cardStyle}
            >
              <Iframe
                url={vidUrl2}
                alt="Lisa dancing Sevillanas por la noche"
                title="Nighttime Sevillanas"
                id="70"
                width={cardStyle.width}
                height={cardStyle.height}
                className="border border-secondary"
                allowFullScreen
              />

              <Card.Body>
                <Card.Title>
                  <em>Sevillanas, Noche en el Jardin</em>
                </Card.Title>

                <Card.Text>Quarantine Project</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <Card
              className="bg-dark text-light"
              key={Iframe.id}
              style={cardStyle}
            >
              <Iframe
                width={cardStyle.width}
                height={cardStyle.height}
                src="https://www.instagram.com/p/CUNg9ulA-fl/embed"
                frameborder="0"
                id="71"
                allowFullScreen
                className="border border-secondary"
              ></Iframe>
              <Card.Body>
                <Card.Text>Dancing at Lola's Bistro</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} />
          <Col md={5}>
            <Card
              className="bg-dark text-light"
              key={Iframe.id}
              style={cardStyle}
            >
              <Iframe
                width={cardStyle.width}
                height={cardStyle.height}
                src="https://www.instagram.com/p/CQ93Kurgqz2/embed?loop=3"
                frameborder="0"
                id="72"
                className="border border-secondary"
              ></Iframe>
              <Card.Body>
                <Card.Text>Teachng at Princeton Dance and Theater</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Card
              className="bg-dark text-light"
              key={Iframe.id}
              style={cardStyle}
            >
              <ReactPlayer
                url={vidUrl3}
                width={cardStyle.width}
                controls={true}
                className="border border-secondary"
                origin="window.location.host"
                alt="Lisa as Juana la"
              />
              <Card.Body>
                <Card.Text>Teaching at Princeton Dance and Theater</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} />
          <Col md={5}>
            <Card
              className="bg-dark text-light"
              key={Iframe.id}
              style={cardStyle}
            >
              <ReactPlayer
                url={vidUr14}
                width={cardStyle.width}
                controls={true}
                className="border border-secondary"
                origin="window.location.host"
                alt="Lisa dancing Sevillanas"
              />
              <Card.Body>
                <Card.Text>
                  Lisa dances <em>Sevillanas</em> on PBS NJ with Alborada
                </Card.Text>
                {/* <Card.Text>Lisa dancing Solea!</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Card
              className="bg-dark text-light video-animate"
              key={Iframe.id}
              style={cardStyle}
            >
              <ReactPlayer
                url={vidUrl5}
                width={cardStyle.width}
                controls={true}
                className="border border-secondary"
                origin="window.location.host"
                alt="Three Kings Day"
              />
              <Card.Body>
                <Card.Text>
                  Lisa & students, Arts Council of Princeton
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} />
          <Col md={5}>
            <Card
              className="bg-dark text-light"
              key={Iframe.id}
              style={cardStyle}
              id="tanguillo"
            >
              <Iframe
                width={cardStyle.width}
                height={cardStyle.height}
                src="https://drive.google.com/file/d/1ZaL6JA1EEvr7XffUhYEkJ_tK5r2FUGoh/preview"
                allow="autoplay"
                frameborder="0"
                className="border border-secondary"
                allowFullScreen
              ></Iframe>
              <Card.Body>
                <Card.Text>
                  Dancing "Tanguillo" with Manolo Rivera, Cami Hall, NYC, 1988!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoGallery;

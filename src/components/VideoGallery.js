import React from "react";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import { Container, Row, Col, Card } from "react-bootstrap";
import Iframe from "react-iframe";
import InstagramEmbed from "react-instagram-embed";
const cardStyle = {
  width: "100%",
  height: "350px",
  boxShadow: "5px 3px 3px rgb(217, 83, 79, 0.5)",
  marginBottom: "5%",
};
const vidUrl1 = "https://www.youtube.com/embed/Wwou3GZ4tZ8";
const vidUrl2 =
  "https://drive.google.com/file/d/1jwRTAuRNkzQic8W-n1sLDLakh0KD3zux/preview";
const vidUrl3 =
  "https://www.instagram.com/p/CUNg9ulA-fl/?utm_source=ig_web_button_share_sheet/embed";

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
        <h1>Videos!</h1>
        <Row>
          <Col md={5}>
            <Card
              className="bg-dark text-light"
              key={Iframe.id}
              style={cardStyle}
            >
              <ReactPlayer
                url={vidUrl1}
                width={cardStyle.width}
                controls={true}
                className="border border-secondary"
                origin="window.location.host"
                alt="Lisa as Juana la"
              />
              <Card.Body>
                <Card.Title>
                  Lisa as Juana la Loca in Alborada's <em>Trail of Gold </em>
                </Card.Title>
                {/* <Card.Text>Lisa dancing Solea!</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
         
            <Card
              className="bg-dark text-light"
              key={Iframe.id}
              style={cardStyle}
            >
              <InstagramEmbed
                url="https://www.instagram.com/alborada_dance/p/CUNg9ulA-fl/"
                clientAccessToken="123|456"
                maxWidth={600}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />

              <Card.Body>
                <Card.Title>
                  <em>Sevillanas, Noche en el Jardin</em>
                </Card.Title>

                <Card.Text>Quarantine Project</Card.Text>
              </Card.Body>
            </Card>
        
        </Row>
        <p className="text-light larger">
          <em>More soon!</em>
        </p>
      </Container>
    </>
  );
};

export default VideoGallery;

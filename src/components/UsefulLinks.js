import React from "react";
import { Card } from "react-bootstrap";

export default function UsefulLinks() {
  return (
    <div>
      <Card.Text>
        <Card.Link href="http://www.AlboradaDance.org/" className="text-white">
          {" "}
          Alborada Spanish Dance Theatre
        </Card.Link>
      </Card.Text>
      <Card.Text>
        <Card.Link
          href="http://www.towntopics.com/wordpress/2015/10/14/ole-flamenco-flourishes-in-princeton-as-lisa-botalico-leads-eager-spanish-dancers"
          target="blank"
          className="text-light"
        >
          <em>
            “Ole!” Flamenco Flourishes in Princeton As Lisa Botalico Leads Eager
            Spanish Dancers,{" "}
          </em>
          <br />
          Princeton Town Topics
        </Card.Link>
      </Card.Text>
      <Card.Text>
        <Card.Link
          href="http://artscouncilofprinceton.org/events/fiesta-del-dia-de-los-reyes-magos-a-three-kings-day-celebration/"
          className="text-white"
        >
          Three Kings Day{" "}
        </Card.Link>
      </Card.Text>
      <Card.Text>
        <Card.Link href="https://www.pinnworth.com/" className="text-white">
          {" "}
          <em>Zorro, The Musical</em>, Pinnworth Productions
        </Card.Link>
      </Card.Text>
      {/* <Card.Text>
                  <Card.Link href='images/cityartsphoto.jpg'>
                    {' '}
                    Lisa teaching students at CityArts, Trenton, 2010
                  </Card.Link>
                </Card.Text> */}
      <Card.Text>
        <Card.Link
          href="https://jaliov.github.io/JoelRudinArt/index.html"
          className="text-white"
        >
          {" "}
          <em>Cosmic Visions, </em> Art by Joel Rudin
        </Card.Link>
      </Card.Text>
      <Card.Text></Card.Text>
    </div>
  );
}

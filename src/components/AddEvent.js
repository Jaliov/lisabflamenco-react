import React from "react";
import { Card } from "react-bootstrap";

const AddEvent = () => {
  const addEvents = [
    {
      id: 46,
      date: "APRIL 9, 2024",
      text: "PAUL ROBESON 126TH BIRTHDAY CELEBRATION",
      nonlink:
        '"...This program is a multi-media celebration of the legacy of Paul Robeson, Princeton’s “native son” and scholar, all American athlete, artist, and activist. This celebration of his legacy is free and open to all ages, presented in partnership with the Witherspoon Jackson Historical and Cultural Society (WJHCS)."',
      link: "https://artscouncilofprinceton.org/event/robeson-126/",
    },
    /*{
      id: 47,
      date: "Friday, March 15, 8 pm; Sunday, March 17, 3 pm 2024",
      text: "Boheme Opera Carmen",
      nonlink:
        "Choreography by Lisa Botalico performed by Lisa with dancers from the Alborada Spanish Dance Theatre",
      link: "https://www.bohemeopera.org/carmen",
    },*/
  ];
  return addEvents ? (
    addEvents.map((event) => (
      <>
        <Card.Text key={event.id} className="text-warning">
          <p className="larger">
            <span style={{ color: "yellow", fontWeight: "bold" }}>
              {" "}
              {event.date}:{" "}
            </span>
            <Card.Link href={event.link} target="blank">
              {event.text}{" "}
            </Card.Link>

            {event.nonlink}
          </p>{" "}
        </Card.Text>
      </>
    ))
  ) : (
    <Card.Text>No upcoming at this time</Card.Text>
  );
};

export default AddEvent;

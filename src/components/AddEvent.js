import React from "react";
import { Card } from "react-bootstrap";

const AddEvent = () => {
  const addEvents = [
    {
      id: 46,
      date: "Feb 24 - Mar 3, 2024",
      text: "Roxey Ballet Carmen",
      link: "https://www.roxeyballet.org/carmen",
    },
    {
      id: 47,
      date: "Friday, March 15, 8 pm; Sunday, March 17, 3 pm 2024",
      text: "Boheme Opera Carmen",
      link: "https://www.bohemeopera.org/carmen",
    },
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
              {" "}
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

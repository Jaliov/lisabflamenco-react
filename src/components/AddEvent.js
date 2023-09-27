import React from "react";
import { Card } from "react-bootstrap";

const AddEvent = () => {
  const addEvents = [
    {
      id: 46,
      date: "More event listings coming soon!",
      text: "",
      link: "",
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
          </p>{" "}
          <Card.Link href={event.link} target="blank">
            {" "}
            {event.text}{" "}
          </Card.Link>
          {event.nonlink}
        </Card.Text>
      </>
    ))
  ) : (
    <Card.Text>No upcoming at this time</Card.Text>
  );
};

export default AddEvent;

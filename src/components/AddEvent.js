import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";

const AddEvent = () => {
  const addEvents = [];
  return addEvents ? (
    addEvents.map((event) => (
      <>
        <Card.Text key={event.id} className="text-warning">
          <p className="larger">
            <span style={{ color: "yellow", fontWeight: "bold" }}>
              {" "}
              {event.date}:{" "}
            </span>
            <Card.Link
              className="cardlink "
              href={event.link}
              target="blank"
              style={{ color: "white" }}
            >
              {event.text} <br></br>
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

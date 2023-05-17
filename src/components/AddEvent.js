import React from "react";
import { Card } from "react-bootstrap";

const AddEvent = () => {
  const addEvents = [
    {
      id: 46,
      date: "Sunday, May 21, 2 PM",
      text: "Morven Moves: Choreography Showcase at Morven Museum, Princeton, NJ",
      link: "https://www.facebook.com/byron.barn/",
    },
    {
      id: 47,
      date: "Sunday, June 15, 4 PM",
      text: "Tablao Performances at Spain Inn 2 Restaurant, Asbury NJ",
      link: "",
    },
    {
      id: 48,
      date: "Sunday, June 25 from 2:30-6 PM",
      text: "Alborada's 10th Annual Feria de Sevilla, Park Press Park, Woodbridge",
      link: "http://www.AlboradaDance.org/",
    },
  ];
  return addEvents ? (
    addEvents.map((event) => (
      <>
        <Card.Text key={event.id} className="text-warning">
          <p className="larger">
            <span style={{ color: "yellow" }}> {event.date}: </span>
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

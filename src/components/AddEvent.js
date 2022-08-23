import React from "react";
import { Card } from "react-bootstrap";

const AddEvent = () => {
  const addEvents = [
    {
      id: 46,
      date: "September 15, 7 PM",
      text: "Inspiraciones: Stafford Theater, Manahawkin",
      link: "http://www.AlboradaDance.org/",
    },
    {
      id: 47,
      date: "Sunday, Sept 18, 4:30 PM",
      text: "Alborada's Summerfest (Dinner and Performances): Lola's Latin Bistro, Metuchen",
      link: "http://www.AlboradaDance.org/",
    },
    {
      id: 48,
      date: "Sunday Oct 9, 2:30 PM",
      text: "Heartbeats: Spain and the Afro-Caribbean Connection, Sunday, Oct 11, 2:30 PM, Avenel Performing Arts Center, NJ",
      link: "",
    },
    {
      id: 49,
      date: "Sunday Oct 16, 4 PM & 5:45 PM",
      text: "Tablao Performances at Spain Inn 2 Restaurant, Asbury NJ",
      link: "",
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

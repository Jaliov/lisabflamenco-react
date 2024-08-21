import React from "react";
import { Card } from "react-bootstrap";

const AddEvent = () => {
  const addEvents = [
    {
      id: 46,
      date: "September 15 1-2 PM ",
      text: "Performance in Palmer Square, Princeton",
      link: "https://palmersquare.com/event/festival-cultural-latino-a-community-mercado/",
    },
    {
      id: 47,
      date: "October 5 at 7:30 PM",
      text: 'Alborada performance at Playhouse 22, East Brunswick: "Flamenco y Más!"',

      link: "https://www.alboradadance.org/",
    },
    {
      id: 48,
      date: "November 10 at 2:30 PM",
      text: "Remembering Paul Robeson Spain 1938 Lecture Demonstration at Woodbridge Public Library",

      link: "https://woodbridgelibrary.org/1026/Public-Library",
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
            <Card.Link
              className="cardlink"
              href={event.link}
              target="blank"
              // style={{ color: "white" }}
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

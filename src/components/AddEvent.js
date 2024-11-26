import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";

const AddEvent = () => {
  const addEvents = [
    {
      id: 46,
      date: " Sunday, December 8 at 3 PM  ",

      text: "Flamenco Tablao Show at Spanish Pavilon, Harrison, NJ",
      link: "https://spanishpavillion.com/",
    },
    {
      id: 47,
      date: "December 31 at 4:45 & 5:45 ",
      text: "First Night Morristown, Morristown HS Auditorium",
      link: "https://firstnightmorris.org/events/alborada-spanish-dance-theatre-445pm/",
    },
    {
      id: 48,
      date: "January 4, 2025 at 5:30 PM ",
      text: " Arts Council of Princeton Annual Three Kings Day Flamenco Dance Celebration",

      link: "https://artscouncilofprinceton.org/",
    },
    {
      id: 49,
      date: "Saturday, April 26, 2025, 7:30 PM",
      text: 'Cantabile Chamber Chorale: "Echoes of Spain" at Christ Church Methodist Church, Piscataway, NJ',
      link: "#",
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

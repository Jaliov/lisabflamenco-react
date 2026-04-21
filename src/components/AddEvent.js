import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";

const AddEvent = () => {
  const addEvents = [
    {
      id: 50,
      date: "Saturday, May 2 1 - 4 PM  ",

      text: "Arts Council of Princeton's Open House and Art Bazaar (1-4 PM)", 
      link: "https://artscouncilofprinceton.org/artists/princeton-art-bazaar/"
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
    <Card.Text></Card.Text>
  );
};

export default AddEvent;

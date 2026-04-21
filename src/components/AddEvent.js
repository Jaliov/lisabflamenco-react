import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";

const AddEvent = () => {
  const addEvents = [
    {
      id: 50,
      date: "Saturday, May 2, 1 - 4 PM  ",

      text: " Arts Council of Princeton's Open House and Art Bazaar (1-4 PM)", 
      link: "https://artscouncilofprinceton.org/artists/princeton-art-bazaar/"
    },
     {
      id: 51,
      date: "Sunday, June 7, 2:30 - 6 PM  ",

      text: " Alborada Spanish Dance Theatre Annual Feria de Sevilla at Parker Press Park, Woodbridge ", 
      link: "https://www.alboradadance.org/"
    },
     {
      id: 52,
      date: "Saturday, June 13, 6:30 PM  ",

      text: " Arts Council of Princeton's Solley Theater: Annual Choreography and Student Showcase ",
      link: "https://artscouncilofprinceton.org/"
    },
     {
      id: 53,
      date: "Saturday, July 25, 6 - 11 PM  ",

      text: " Alborada Spanish Dance Theatre Annual SummerFest Gala Fundraiser at Spain Inn Restaurant, Piscataway ",
      link: "https://www.alboradadance.org/"
    },
  ];
  
  return addEvents ? (
    addEvents.map((event) => (
      <>
        <Card.Text key={event.id} className="text-warning">
          <p className="larger">
            <span style={{ color: "yellow", fontWeight: "bold" }}>
              {" "}
              {event.date}: {" "}
            </span>
            <Card.Link
              className="cardlink "
              href={event.link}
              target="blank"
              style={{ color: "white" }}
              textDecoration = "none"
            >
              {" "} {event.text} <br></br>
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

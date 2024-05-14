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
    {
      id: 47,
      date: "Thursday, June 6, 7 pm",
      text: "Spanish Classical Dance Song and Music",
      nonlink:
        "Performance celebrating Lisa Botalico's 25th anniversary at The Arts Council of Princeton, featuring works by Spanish composers Manuel deFalla, Ganados as well as Bach, Beethoven and more! Guest artists: Joel Rudin, viola, Christina Xie, piano, Debbie Lingel, singer",
      link: "https://artscouncilofprinceton.org/",
    },
    {
      id: 48,
      date: "Friday, June 7, 7 pm",
      text: "Flamenco Dance Song and Music",
      nonlink:
        "Performance celebrating Lisa Botalico's 25th anniversary at The Arts Council of Princeton, with Ivan Max, flamenco guitar and Yuka Koyama, flamenco vocalist",
      link: "https://artscouncilofprinceton.org/",
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

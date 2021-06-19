import React from 'react';
import { Card } from 'react-bootstrap';

const  AddEvent = () => {
      const addEvents = [
          {id: 45, date: 'May 25 - July', text: 'Roxey Ballet Latin Creations, Lisa, guest dancer/choreographer, Roxey Ballet YouTube channel', link: 'https://www.roxeyballet.org/'},
          {id: 46, date:'Sept 19, 4 pm', text: "Alborada Spanish Dance Theatre: Sherry Tasting event at Lola's Bistro, Metuchen", link: 'http://www.AlboradaDance.org/'},
          {id: 47, date:'Oct 17, 3 pm', text: 'Alborada Concert, New Brunswick', link: 'http://www.AlboradaDance.org/'}
      ]
      return (  
        addEvents ? addEvents.map((event) => (
            <>
            <Card.Text key = {event.id} className= 'text-warning'><p className="larger"><span style={{color:'yellow'}}> {event.date}: </span></p>  <Card.Link href = {event.link} target='blank'> {event.text} </Card.Link>{event.nonlink}</Card.Text>
            </>
            )) : <Card.Text>No upcoming at this time</Card.Text>
      )
}
 
export default AddEvent ;
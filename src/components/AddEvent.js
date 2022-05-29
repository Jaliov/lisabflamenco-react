import React from 'react';
import { Card } from 'react-bootstrap';

const AddEvent = () => {
      const addEvents = [
          
          {id: 46, date:'June 5, 2:30-6 PM', text: 'Alborada Spanish Dance Theatre: Feria de Sevilla', link: 'http://www.AlboradaDance.org/'},
          {id: 47, date:'Friday, June 10, 7 PM', text: 'Lisa’s Adult Student and Choreography Showcase', link: 'http://artscouncilofprinceton.org/events/flamenco-dance-showcase/'},
          {id: 48, date:'Sunday, Sept 18, 4-8 PM', text: "Alborada’s Fall Gala: Lola’s Latin Bistro, Metuchen", link: 'http://www.AlboradaDance.org/'},
          {id: 49, date:'Sunday Oct 11, 2:30 PM', text: 'Heartbeats: Spain and the Afro-Caribbean Connection, Sunday, Oct 11 2:30 PM, Avenel Performing Arts Center, NJ'} 
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
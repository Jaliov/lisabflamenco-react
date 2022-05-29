import React from 'react';
import { Card } from 'react-bootstrap';

const AddEvent = () => {
      const addEvents = [
          
          {id: 46, date:'June 5, 2:30-6 PM', text: 'Alborada Spanish Dance Theatre: Feria de Sevilla', link: 'http://www.AlboradaDance.org/'},
          {id: 47, date:'Friday, June 10, 7 PM', text: 'Lisa’s Adult Student and Choreography Showcase', link: 'http://artscouncilofprinceton.org/'}
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
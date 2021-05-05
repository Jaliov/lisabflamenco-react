import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const  AddEvent = () => {
    
      const [addEvents] = useState([
        
          {id: 45, date: 'May 25,', text: 'Roxey Ballet Latin Creations, Lisa, guest dancer/choreographer, Roxey Ballet YouTube channel', link: 'https://www.roxeyballet.org/'},
          {id: 46, date:'June 4 - 12,', text: 'Alborada Spanish Dance Theatre, Romeria del Rocio, YouTube', link: 'http://www.AlboradaDance.org/'},
          {id: 47, date:'June 6, 3 pm,', text: 'Free Student Showcase at Princeton Shopping Center', link: ''}

      ])

      return (  
        addEvents ? addEvents.map((event) => (
            <>
            <Card.Text key = {event.id} className= 'text-warning'> <Card.Link href = {event.link} target='blank'><span style={{color:'yellow'}}> {event.date}</span> {event.text}  </Card.Link></Card.Text>
            </>
            )) : null

       

      )
}
 
export default AddEvent ;
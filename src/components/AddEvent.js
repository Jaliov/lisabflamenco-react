import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const  AddEvent = () => {
    
      const [addEvents] = useState([
        
          {id: 45, text: 'event1!'},
          {id: 46, text: 'event 2, wow' },
          {id: 47, text: 'Lisa great show!', }

      ])

      return (  
        addEvents ? addEvents.map((event) => (
            <>
            <Card.Text key = {event.id}> {event.text} </Card.Text>
            </>
            )) : null

       

      )
}
 
export default AddEvent ;
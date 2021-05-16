import { Card } from 'react-bootstrap';

const  AddEvent = () => {
      const addEvents = [
          {id: 45, date: 'May 25', text: 'Roxey Ballet Latin Creations, Lisa, guest dancer/choreographer, Roxey Ballet YouTube channel', link: 'https://www.roxeyballet.org/'},
          {id: 46, date:'June 4 - 12', text: 'Alborada Spanish Dance Theatre, Romeria del Rocio, YouTube', link: 'http://www.AlboradaDance.org/'},
          {id: 47, date:'June 6, 3 pm', link:'', nonlink:' Free Student Showcase at Princeton Shopping Center'}
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
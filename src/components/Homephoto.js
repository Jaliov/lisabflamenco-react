
import React from 'react';

const Homephoto = ( {photo, cover} ) => {
    photo = <img src = {cover} alt="cover" width="400px" height="600px;" className="rounded mx-auto d-block"></img> 
    return photo
}

export default Homephoto; 

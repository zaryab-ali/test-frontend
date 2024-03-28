import React, { useEffect, useState } from 'react';


const Card = ({ person }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px' }}>
            <h3>{person.firstname} </h3>
            <h3>{person.lastname}</h3>
            <h6>{person.gender}</h6>
            <h6>{person.dob}</h6>
            <h6>{person.profession}</h6>
            <h6>{person.casting}</h6>
           

            
            {/* Add more fields as needed */}
        </div>
    );
};


export default Card;
import React from 'react';

const Friend = ({ friendData }) => {
  return ( 
    <div> 
        <h1>{friendData.name}</h1>
        <div>
            <h3>{friendData.age} years old</h3>
            <h3>{friendData.email}</h3>
        </div> 
    </div>
  )
};
export default Friend;

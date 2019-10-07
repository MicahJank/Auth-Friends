import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import { useDispatch } from 'react-redux';

const Friend = ({ friendData }) => {

    const dispatch = useDispatch();

    const deleteFriend = (e) => {
        e.preventDefault();
        dispatch({
            type: "GET_FRIENDS_PENDING"
        })
        axiosWithAuth().delete(`/friends/${friendData.id}`)
            .then(res => {
                dispatch({
                    type: "GET_FRIENDS_SUCCESS",
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "GET_FRIENDS_FAIL",
                    payload: err
                })
            });
    }

  return ( 
    <div className='friend-container'> 
        <h1>{friendData.name}</h1>
        <div>
            <h3>{friendData.age} years old</h3>
            <h3>{friendData.email}</h3>
        </div>
        <button onClick={deleteFriend}>Delete</button> 
    </div>
  )
};
export default Friend;

import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import useForm from '../utils/useForm.js';
import { useDispatch } from 'react-redux';

const Friend = ({ friendData }) => {
    const [editing, setEditing] = useState(false);
    const [editInfo, handleChanges, clearForm] = useForm();
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

    const toggleEditing = () => {
        setEditing(!editing);
    }

    const applyChanges = () => {
        toggleEditing();
        dispatch({ type: "GET_FRIENDS_PENDING"})
        axiosWithAuth().put(`/friends/${friendData.id}`, editInfo)
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
            })
    }

    return ( 
        <div className='friend-container'>
            <label hidden={editing} className={'friend name'}>{friendData.name}</label>
            <input hidden={!editing} className={`friend name`}
                type='text'
                name='name'
                value={editInfo.name || friendData.name}
                onChange={handleChanges}
             />
            <label hidden={editing} className='friend age'>{friendData.age}</label> 
            <input hidden={!editing} className={`friend age`}
                type='text'
                name='age'
                value={editInfo.age || friendData.age}
                onChange={handleChanges}
            />
            <label hidden={editing} className='friend email'>{friendData.email}</label>  
            <input hidden={!editing} className={`friend email`}
                type='email'
                name='email'
                value={editInfo.email || friendData.email}
                onChange={handleChanges}
            />
            <div className='buttons'>
                <button className='delete-friend' onClick={deleteFriend}>Delete</button>
                <button onClick={toggleEditing} hidden={editing} className='edit-friend'>Edit</button>
                <button onClick={applyChanges} hidden={!editing} className='apply-changes'>Apply</button> 
            </div>
           
        </div>
      )
};



export default Friend;

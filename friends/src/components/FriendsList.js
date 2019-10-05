import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const FriendsList = () => {

    const friends = useSelector(state => state.friendsList.friends);
    const isPending = useSelector(state => state.friendsList.pending);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_FRIENDS_PENDING' });
        axiosWithAuth().get('/friends')
            .then(res => {
                dispatch({ 
                    type: 'GET_FRIENDS_SUCCESS',
                    payload: res.data 
                });
            })
            .catch(err => dispatch({ 
                type: 'GET_FRIENDS_FAIL',
                payload: err
            }))
    }, [])

    if(isPending) {
        return (
            <div>
                Loading Friends...
            </div>
        )
    } else {
        return (    
            <div> 
            {friends.map(friend => {
                return <div>{friend.name}</div>
            })}
            </div>
        )
    }
};
export default FriendsList;

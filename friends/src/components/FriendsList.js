import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import Friend from './Friend.js';
import AddFriendForm from './AddFriendForm.js';

const FriendsList = () => {

    const [modal, setModal] = useState(false);
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
            <div className='friends-list'>
                <button onClick={() => setModal(true)}>Add Friend</button>
                <AddFriendForm modal={modal} setModal={setModal} />
                {friends.map(friend => {
                    return <Friend friendData={friend} key={friend.id} />
                })}
            </div>
        )
    }
};
export default FriendsList;

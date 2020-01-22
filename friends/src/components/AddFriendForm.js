import React from 'react';

import { useDispatch } from 'react-redux'; 

import useForm from '../utils/useForm';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const AddFriendForm = ( { modal, setModal } ) => {

    const [friendInfo, handleChanges, clearForm] = useForm();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "GET_FRIENDS_PENDING"
        })
        axiosWithAuth().post('/friends', friendInfo)
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
        
        clearForm();
    }

  return (
  <div onClick={() => setModal(false)} className={`modal add-friend ${modal ? 'active' : ''}`}>
      <form onSubmit={handleSubmit} className='form add-friend'> 
        <input
            onClick={(event) => event.stopPropagation()}
            type='text'
            name='name'
            value={friendInfo.name || ''}
            onChange={handleChanges}
            placeholder='name'
        />
        <input
            onClick={(event) => event.stopPropagation()}
            type='number'
            name='age'
            value={friendInfo.age || ''} 
            onChange={handleChanges}
            placeholder='age'
        />
        <input
            onClick={(event) => event.stopPropagation()}
            type='email'
            name='email'
            value={friendInfo.email || ''} 
            onChange={handleChanges}
            placeholder='email'
        />
        <button>Add</button>
      </form>
  </div>
  )
};
export default AddFriendForm;

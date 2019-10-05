import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import useForm from '../utils/useForm.js';

const Login = () => {
    const [loginInfo, handleChanges, clearForm] = useForm();

    const submitHandler = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', loginInfo)
            .then(res => localStorage.setItem('token', res.data.payload))
            .catch(err => console.log(err));
        clearForm();
    }

  return (
    <form onSubmit={submitHandler}>
        <input 
            type='text'
            name='username'
            value={loginInfo.username || ''}
            onChange={handleChanges}
        />
        <input 
            type='password'
            name='password'
            value={loginInfo.password || ''}
            onChange={handleChanges}
        />
        <button>Log In</button>
    </form>
  );
};
export default Login;

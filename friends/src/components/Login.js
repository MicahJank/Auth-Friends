import React from 'react';
import useForm from '../utils/useForm.js';

const Login = () => {
    const [loginInfo, handleChanges, clearForm] = useForm();

    const submitHandler = e => {
        e.preventDefault();
        console.log(loginInfo);
        clearForm();
    }

  return (
    <form onSubmit={submitHandler}>
        <input 
            type='text'
            name='userName'
            value={loginInfo.userName || ''}
            onChange={handleChanges}
        />
        <input 
            type='password'
            name='userPass'
            value={loginInfo.userPass || ''}
            onChange={handleChanges}
        />
        <button>Log In</button>
    </form>
  );
};
export default Login;

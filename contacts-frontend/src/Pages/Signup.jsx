import React, { useState } from 'react'
import { BASE_URL_USERS, HOME, LOGIN } from '../ConstantLinks';
import {Link, useNavigate} from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const style = "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
  
    fetch(`${BASE_URL_USERS}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log('Response data:', result);
        // localStorage.setItem('accessToken', result?.accessToken)
        // localStorage.setItem('accessToken', JSON.stringify(result?.accessToken));
        scrollTo(0, 0);
        navigate(LOGIN);
        // Handle successful Signup, store token, redirect, etc.
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>

  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit}>

<div>
        <lable for="username" className="block text-sm font-medium leading-6 text-gray-900">User Name</lable>
        <div className='mt-2'>
          <input name='username' type='text' onChange={(e) => setUsername(e.target.value)} required 
          className={style} />
        </div>
      </div>

      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input name="email" type="email" autoComplete="false" onChange={(e) => setEmail(e.target.value)} required className={style} />
        </div>
      </div>
    

      
      <div>
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
          <input name="password" type="password" autoComplete="false" onChange={(e) => setPassword(e.target.value)} required className={style} />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already have an account? <Link to={LOGIN} onClick={() => scrollTo(0, 0)} className='font-medium text-blue-300'> Login </Link>
      {/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a> */}
    </p>
  </div>
</div>
  )
}

export default Signup
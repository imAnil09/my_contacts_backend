import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { BASE_URL_CONTACTS, CONTACTS, HOME, LOGIN } from '../ConstantLinks';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

export default function NewContact() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const accessToken = useSelector((state) => state?.accessToken)
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch(`${BASE_URL_CONTACTS}/`, {
            method: 'POST',
            headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email, 
                phone:mobile 
            }),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const result = await response.json();
          toast.success('Sucessfully created contact')
          navigate(CONTACTS)
        } catch (error) {
          console.error('Error:', error.message);
          dispatch({
            type:'accessToken',
            payload: ''
          })
          navigate(LOGIN)
        }
      };
    
  return (
    <div className="mx-auto max-w-7xl py-10  flex justify-center min-h-[80vh] px-5">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Create new contact</h2>

            <div className="mt-4 flex flex-col gap-4">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="name"
                  id="name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  required
                  name="mobile"
                  id="mobile"
                  autoComplete="tel"
                  onChange={(e) => setMobile(e.target.value)}
                  className="block w-full rounded-md px-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your Mobile Number"
                />
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button type='button' className='rounded-md text-indigo-600 px-3 py-2 text-sm font-semibold bg-white shadow-sm hover:text-indigo-500 focus-visible:outline focus-visisble:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={() => navigate(CONTACTS)}>Cancel</button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
          
        </div>
      </form>
    </div>
  );
}

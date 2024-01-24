import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { BASE_URL_CONTACTS, HOME } from '../ConstantLinks';
import { useNavigate } from 'react-router-dom';

export default function NewContact() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        console.log({email, mobile, name}, "useData")

    const accessToken = JSON.parse(localStorage.getItem('accessToken'));

    
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
          console.log('Response data:', result);
          navigate(HOME)

          // Handle successful login, store token, redirect, etc.
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
    
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <form className="w-full max-w-md py-10" onSubmit={handleSubmit}>
        <div className="space-y-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Create new contact</h2>

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

        <div className="mt-6 flex justify-end">
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

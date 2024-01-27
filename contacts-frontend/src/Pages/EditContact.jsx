import { UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { BASE_URL_CONTACTS, CONTACTS, HOME } from '../ConstantLinks';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

export default function EditContact() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(true);
    
    const { id } = useParams();
    
    const accessToken = useSelector((state) => state?.accessToken)

    
    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      };
      fetch(BASE_URL_CONTACTS + '/'+id, requestOptions).then(res => res.json()).then(data => {
        setName(data?.name)
        setEmail(data?.email)
        setMobile(data?.phone)
        setLoading(false)
      }).catch(err => {
        navigate(CONTACTS)
      })
    }, [id])
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
          fetch(`${BASE_URL_CONTACTS}/${id}`, {
            method: 'PUT',
            headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email, 
                phone:mobile 
            }),
          }).then((res) => {
           return res.json()
          })
          .then(data => {
            toast.success('Successfully edited contact')
            navigate(CONTACTS)
            if (!data?.ok) {
              throw new Error(`HTTP error! Status: ${data?.status}`);
            }
          }).catch(error => {
            console.log('Error:'+ error)
          })
      };
    
  return (
    <React.Fragment>
   {loading ? (
        <div className="flex items-center justify-center min-h-[80vh]">
        <p className='font-bold text-2xl'>Loading...</p>
      </div>
      ) : <div className="mx-auto max-w-7xl flex justify-center py-10 min-h-[80vh] px-5">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Edit contact</h2>

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
                  value={name}
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
                  value={email}
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
                  value={mobile}
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
    </div>}
    </React.Fragment>
  );
}

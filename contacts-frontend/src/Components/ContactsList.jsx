import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL_CONTACTS, EDIT_CONTACT } from '../ConstantLinks';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ContactsList = ({ contacts }) => {

  const contactsList = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state?.accessToken)
  const handleDelete = (Id) => {
    fetch(BASE_URL_CONTACTS+'/'+Id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        },
    }).then(res => {
      return res.json();
    }).then(data => {
      const afterRemoveContacts = contactsList.filter((contact) => contact?._id !== Id);

    // Dispatch the updated contacts list
    dispatch({
      type: 'contactsList',
      payload: afterRemoveContacts,
    });
    toast.success('Successfully deleted')
    })
  }
  return (
    <div className="flex flex-col gap-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="bg-white flex justify-between items-center w-full shadow-md rounded-md p-4">
            <div className='w-[10rem]'>
          <h2 className="text-lg font-bold">{contact.name}</h2>
          <p className="text-gray-600 text-ellipsis overflow-hidden ...">{contact.email}</p>
          <p className="text-gray-600">{contact.phone}</p>
          </div>
          <div className='flex flex-col h-10 justify-center items-center'>
            <div className='flex gap-3'>
            <Link to={EDIT_CONTACT+'/'+contact?._id} className='text-gray-300 bg-gray-700 cursor-pointer rounded-md px-3 py-2 text-sm font-medium'>Edit</Link>
            <button onClick={() => handleDelete(contact?._id)} className='text-gray-300 bg-gray-700 cursor-pointer rounded-md px-3 py-2 text-sm font-medium'>Delete</button>
            </div>
          </div>
          {/* Add more details or customize as needed */}
        </div>
      ))}
    </div>
  );
};

export default ContactsList;

import React from 'react';

const ContactsList = ({ contacts }) => {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {contacts.map((contact) => (
        <li key={contact.id} className="bg-white flex justify-between items-center w-full shadow-md rounded-md p-4">
            <div>
          <h2 className="text-lg font-bold">{contact.name}</h2>
          <p className="text-gray-600">{contact.email}</p>
          <p className="text-gray-600">{contact.phone}</p>
          </div>
          <div className='flex flex-col h-10 justify-center items-center'>
            <div className='flex gap-3'>
            <button className='text-gray-300 bg-gray-700 cursor-pointer rounded-md px-3 py-2 text-sm font-medium'>Edit</button>
            <button className='text-gray-300 bg-gray-700 cursor-pointer rounded-md px-3 py-2 text-sm font-medium'>Delete</button>
            </div>
          </div>
          {/* Add more details or customize as needed */}
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

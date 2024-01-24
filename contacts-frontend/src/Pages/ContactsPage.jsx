import React, { useEffect, useState } from 'react';
import { BASE_URL_CONTACTS } from '../ConstantLinks';
import ContactsList from '../Components/ContactsList';

const ContactsPage = () => {
  const [AuthReducer, setAuthReducer] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));

    const fetchContacts = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
        };

        const response = await fetch(BASE_URL_CONTACTS, requestOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        console.log(result, 'contacts');
      } catch (error) {
        console.log('error', error);
      }
    };

    if (accessToken) {
      setAuthReducer(accessToken);
      console.log(accessToken, 'accessToken');

      // Call the fetchContacts function
      fetchContacts();
    }
  }, [AuthReducer]);

  return (
    <div>
      <h1>ContactsPage</h1>
      {/* Render your contacts data as needed */}
      {/* <ul>
        {data.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul> */}
      <ContactsList contacts={data} />
    </div>
  );
};

export default ContactsPage;

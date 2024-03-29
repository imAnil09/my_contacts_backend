import React, { useEffect, useState } from 'react';
import { BASE_URL_CONTACTS, LOGIN } from '../ConstantLinks';
import ContactsList from '../Components/ContactsList';
import NoPageFound from './NoPageFound';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ContactsPage = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(contacts)
  }, [contacts])
  
  const accessToken = useSelector((state) => state?.accessToken)
  useEffect(() => {

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
        // Dispatching action
        dispatch({
          type: 'contactsList',  // Make sure it matches the reducer key
          payload: [...result],
        });
        setLoading(false);
      } catch (error) {
        console.log('error', error);
        dispatch({
          type: 'resetAccessToken',
        })
        navigate(LOGIN)
      }
    };

      // Call the fetchContacts function
      fetchContacts();
    }, []);

  return (
    <div className='mx-auto max-w-7xl p-5 flex flex-col gap-6 min-h-[80vh]'>
      <div className='text-2xl font-bold leading-'>My Contacts</div>
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
        <p className='font-bold text-2xl'>Loading...</p>
      </div>
      ) : data?.length > 0 ?
      <ContactsList contacts={data} />
      : <NoPageFound head={' '} title={"Contacts Not Found"} description={'Please create your contacts by clicking on below create contact button'} />
    }</div>
  );
};

export default ContactsPage;

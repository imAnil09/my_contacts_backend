import React, { useEffect, useState } from 'react'
import { BASE_URL_USERS, LOGIN } from '../ConstantLinks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState();
  const accessToken = useSelector((state) => state?.accessToken)
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch(`${BASE_URL_USERS}/current`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result)
        setLoading(false);
      } catch (error) {
        console.error('Error:', error.message);
        dispatch({
          type:'accessToken',
          payload: ''
        })
        navigate(LOGIN)
      }
    };

    fetchFunction();  
  }, []);

  
  return (
    <React.Fragment>
      {loading ? (
        <div className="flex items-center justify-center min-h-[80vh]">
        <p className='font-bold text-2xl'>Loading...</p>
      </div>
      ) :
    <div className='mx-auto max-w-7xl py-10 min-h-[80vh] px-5'>
      <div className="sm:px-0">
        <h3 className="text-2xl font-bold leading-7">Profile</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veritatis quasi earum sint deleniti assumenda, sapiente error deserunt cupiditate tenetur?</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">User ID</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.id}</dd>
          </div>
          <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.username}</dd>
          </div>
          <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.email}</dd>
          </div>
        </dl>
      </div>
    </div>}
    </React.Fragment>
  )
}

export default React.memo(Home);
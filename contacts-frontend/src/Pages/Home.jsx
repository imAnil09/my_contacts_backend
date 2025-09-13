import React, { useEffect, useState } from "react";
import { BASE_URL_USERS, LOGIN } from "../ConstantLinks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const accessToken = useSelector((state) => state?.accessToken);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch(`${BASE_URL_USERS}/current`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error.message);
        dispatch({
          type: "accessToken",
          payload: "",
        });
        navigate(LOGIN);
      }
    };

    fetchFunction();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <div className="flex items-center justify-center min-h-[80vh]">
          <p className="font-bold text-2xl animate-pulse text-indigo-600">
            Loading...
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-4xl py-10 min-h-[80vh] px-5">
          {/* Heading */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold text-gray-900">
              👤 Profile Overview
            </h3>
            <p className="mt-2 text-gray-500">
              Manage and view your account information.
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <h4 className="text-lg font-semibold">Welcome, {data?.username}</h4>
              <p className="text-sm opacity-90">Your personal account details</p>
            </div>

            <div className="px-6 py-6">
              <dl className="divide-y divide-gray-100">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-600">User ID</dt>
                  <dd className="mt-1 text-sm font-semibold text-gray-900 sm:col-span-2 sm:mt-0">
                    {data?.id}
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-600">
                    Full Name
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-gray-900 sm:col-span-2 sm:mt-0">
                    {data?.username}
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-600">Email</dt>
                  <dd className="mt-1 text-sm font-semibold text-gray-900 sm:col-span-2 sm:mt-0">
                    {data?.email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(Home);

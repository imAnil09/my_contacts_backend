import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { ABOUT, CONTACTS, CREATE_CONTACT, HELP_AND_SUPPORT, HOME, LOGIN } from '../ConstantLinks'
import { useDispatch, useSelector } from 'react-redux'

const navigation = [
  { name: 'Home', href: HOME, current: true },
  { name: 'My Contacts', href: CONTACTS, current: false },
  { name: 'About', href: ABOUT, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const accessToken = useSelector((state) => state?.accessToken)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'resetAccessToken' });
    dispatch({ type: 'resetContactsList' });
    navigate(LOGIN);
  }

  return (
    <Disclosure as="nav" className="bg-gray-900 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white">
                  <div
                    className="h-8 text-3xl font-bold w-auto cursor-pointer hover:scale-105 transition"
                    onClick={() => navigate(HOME)}
                  >My Contacts</div>
                </div>

                {/* Desktop Links */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {accessToken !== "" && navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => scrollTo(0, 0)}
                        className={classNames(
                          item.current
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium transition'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side */}
              {accessToken !== '' ? (
                <div className="flex items-center space-x-4">
                  {/* Add Contact Button */}
                  <Link
                    to={CREATE_CONTACT}
                    className="hidden sm:inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition"
                  >
                    + Add Contact
                  </Link>

                  {/* Notification */}
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile Menu */}
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                          alt="User avatar"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-100"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={HOME}
                              className={classNames(
                                active && 'bg-gray-100',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={CONTACTS}
                              className={classNames(
                                active && 'bg-gray-100',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              My Contacts
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={handleLogout}
                              className={classNames(
                                active && 'bg-gray-100',
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                              )}
                            >
                              Sign out
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <Link
                  to={HELP_AND_SUPPORT}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition"
                >
                  Help & Support
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden bg-gray-800">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {accessToken !== "" && navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium transition'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              {accessToken !== "" && (
                <Link
                  to={CREATE_CONTACT}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition"
                >
                  + Add Contact
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default React.memo(Navbar)

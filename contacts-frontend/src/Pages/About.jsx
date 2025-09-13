import React from "react";

const About = () => {
  return (
    <div className="container max-w-5xl mx-auto min-h-[80vh] p-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-6 text-center">
        Welcome to MyContacts!
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
        We’re committed to making contact management{" "}
        <span className="font-semibold text-indigo-600">simple, secure, and stress-free</span>.
        Whether you’re a busy professional or simply want an organized way to stay connected,
        our application is built for you.
      </p>

      {/* Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-gray-800 mb-2">Effortless Management</h3>
          <p className="text-gray-600 text-sm">Add, edit, and organize your contacts with ease.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-gray-800 mb-2">Quick Search</h3>
          <p className="text-gray-600 text-sm">Instantly find the contact you need.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-gray-800 mb-2">Customizable Details</h3>
          <p className="text-gray-600 text-sm">Store the information that matters most to you.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-gray-800 mb-2">Secure & Private</h3>
          <p className="text-gray-600 text-sm">Your data is always protected and private.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition sm:col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-gray-800 mb-2">Fully Responsive</h3>
          <p className="text-gray-600 text-sm">Enjoy a seamless experience on any device.</p>
        </div>
      </div>

      {/* Closing Note */}
      <div className="mt-10 text-center">
        <p className="text-gray-700 text-lg">
          💡 We value your feedback and are continuously improving to bring you the best experience.
        </p>
        <p className="mt-4 text-gray-800 font-medium">
          Thank you for choosing <span className="text-indigo-600 font-bold">MyContacts</span> —
          the smarter way to stay connected!
        </p>
      </div>
    </div>
  );
};

export default About;

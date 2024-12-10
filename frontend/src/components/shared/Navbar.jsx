import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth || {});
  // console.log(user);
  const [isPolicyHovered, setIsPolicyHovered] = useState(false);
  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Great<span className="text-blue-700">Hire</span>
          </h1>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center gap-12">
          {user?.role === "recruiter" ? (
            <ul className="flex font-medium items-center gap-5">
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/jobs">Jobs</Link>
              </li>
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/browse">Browse</Link>
              </li>

              {/* Policies Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsPolicyHovered(true)}
                onMouseLeave={() => setIsPolicyHovered(false)}
              >
                <button className="font-medium focus:outline-none hover:text-blue-700 transition duration-200">
                  Policy's
                </button>
                {isPolicyHovered && (
                  <div className="absolute left-0 flex flex-col bg-white border rounded-xl shadow-xl  p-2 w-60 transform origin-left animate-slide-in-right z-20">
                    <Link
                      to="/policy/privacy-policy"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/policy/refund-policy"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Refund and Return Policy
                    </Link>
                    <Link
                      to="/policy/terms-and-conditions"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Terms and Conditions
                    </Link>
                  </div>
                )}
              </li>
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/admin/post-company">Post Company</Link>
              </li>
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/admin/post-job">Post Job</Link>
              </li>
            </ul>
          ) : (
            <ul className="flex font-medium items-center gap-5">
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/jobs">Jobs</Link>
              </li>
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/browse">Browse</Link>
              </li>

              {/* Policies Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsPolicyHovered(true)}
                onMouseLeave={() => setIsPolicyHovered(false)}
              >
                <button className="font-medium focus:outline-none hover:text-blue-700 transition duration-200">
                  Policy's
                </button>
                {isPolicyHovered && (
                  <div className="absolute left-0 flex flex-col bg-white border rounded-xl shadow-xl  p-2 w-60 transform origin-left animate-slide-in-right z-20">
                    <Link
                      to="/policy/privacy-policy"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/policy/refund-policy"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Refund and Return Policy
                    </Link>
                    <Link
                      to="/policy/terms-and-conditions"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Terms and Conditions
                    </Link>
                  </div>
                )}
              </li>
              <li className="hover:text-blue-700 transition duration-200">
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          )}

          {/* User Authentication */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="bg-gradient-to-r from-[#3043a3] to-[#435bc5] text-white hover:from-[#4350c5] hover:to-[#303fa3]  shadow-md px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-gradient-to-r from-[#6A30A3] to-[#8A43C5] text-white hover:from-[#8A43C5] hover:to-[#6A30A3] shadow-md px-4 py-2 rounded">
                  Signup
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* User Avatar */}
              <div className="cursor-pointer hover:ring-2 hover:ring-[#355ff8] rounded-full p-1">
                <img
                  src={user.profile.profilePhoto}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

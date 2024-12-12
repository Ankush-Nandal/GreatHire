import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/authSlice.js";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { User2, LogOut } from "lucide-react"; // Install 'lucide-react' if you haven't already

const Button = ({ children, className, variant = "default", ...props }) => (
  <button
    className={`px-4 py-2 text-white font-medium rounded ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Navbar = () => {
  const { user } = useSelector((store) => store.auth || {});
  const [isPolicyHovered, setIsPolicyHovered] = useState(false);
  const dispatch = useDispatch();

  const isrecruiter = user?.role === "recruiter";
  console.log(user)

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Great<span className="text-blue-700">Hire</span>
          </h1>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {isrecruiter ? (
              <>
                <li className="hover:text-blue-700 transition duration-200">
                  <Link to="/recruiter/dashboard">Dashboard</Link>
                </li>
                <li className="hover:text-blue-700 transition duration-200">
                  <Link to="/">Your Jobs</Link>
                </li>
                <li className="hover:text-blue-700 transition duration-200">
                  <Link to="/jobs">Search Jobs</Link>
                </li>
                <li className="hover:text-blue-700 transition duration-200">
                  <Link to="/recruiter/post-job">Post Job</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-blue-700 transition duration-200">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-blue-700 transition duration-200">
                  <Link to="/jobs">Jobs</Link>
                </li>
              </>
            )}

            {/* Policies Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsPolicyHovered(true)}
              onMouseLeave={() => setIsPolicyHovered(false)}
            >
              <button
                className="font-medium focus:outline-none hover:text-blue-700 transition duration-200"
                aria-haspopup="true"
                aria-expanded={isPolicyHovered}
              >
                Policies
              </button>
              {isPolicyHovered && (
                <div className="absolute left-0 bg-white border rounded-xl shadow-xl p-2 w-60 z-20">
                  <Link
                    to="/policy/privacy-policy"
                    className="px-4 py-2 hover:bg-gray-100 block"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/policy/refund-policy"
                    className="px-4 py-2 hover:bg-gray-100 block"
                  >
                    Refund and Return Policy
                  </Link>
                  <Link
                    to="/policy/terms-and-conditions"
                    className="px-4 py-2 hover:bg-gray-100 block"
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

          {/* User Authentication */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button className="bg-[#6A30A3] hover:bg-[#6A5032]">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#F83002]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <div className="cursor-pointer">
                  <Avatar className="h-10 w-10 border border-gray-200 rounded-full">
                    <AvatarImage
                      src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"}
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </Avatar>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-64 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 rounded-full">
                    <AvatarImage
                      src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"}
                      alt="User Avatar"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {user?.fullname || "User"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {(user?.role === 'recruiter')?"Recruiter":""}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-lg"
                  >
                    <User2 />
                    <span>View Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-lg w-full"
                  >
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import JobSearch from "./JobSearch";
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

const HeroSection = ({ searchInfo }) => {
  // const [query, setQuery] = useState("");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#0233f8] font-medium animate-bounce">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#384ac2]">Dream Jobs</span>
        </h1>
        <p className="text-2xl">Connecting Talent with Opportunity—Your Next Great Hire Awaits!</p>
        <JobSearch searchInfo={searchInfo} />
      </div>
    </div>
  );
};

export default HeroSection;

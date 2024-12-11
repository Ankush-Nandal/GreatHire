import React, { useState, useRef, useEffect } from "react";
import Navbar from "../shared/Navbar";
import postJob from "../../image/postjob.png";

const PostJob = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({ jobType: false, location: false });
  const dropdownRefs = useRef({ jobType: null, location: null });

  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    rating: "",
    location: "",
    respond: "",
    salary: "",
    jobType: "",
    duration: "",
    details: "",
    skills: "",
    qualifications: "",
    benefits: "",
    responsibilities: "",
  });

  const jobTypes = [
    "Remote",
    "On-site",
    "Hybrid",
    "Full Time",
    "Part Time",
    "Internship",
  ];

  const allLocations = [
    "Jaipur, Rajasthan",
    "Delhi, Delhi",
    "Gurugram, Haryana",
    "Noida, Uttar Pradesh",
    "Lucknow, Uttar Pradesh",
    "Ahmedabad, Gujarat",
    "Bhopal, Madhya Pradesh",
    "Kolkata, West Bengal",
    "Mumbai, Maharashtra",
    "Pune, Maharashtra",
    "Hyderabad, Telangana",
    "Bengaluru, Karnataka",
    "Chennai, Tamil Nadu",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelect = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setIsDropdownOpen((prevState) => ({ ...prevState, [field]: false }));
  };

  const handleFocus = (field) => {
    setIsDropdownOpen((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleClickOutside = (e) => {
    Object.keys(dropdownRefs.current).forEach((field) => {
      if (
        dropdownRefs.current[field] &&
        !dropdownRefs.current[field].contains(e.target)
      ) {
        setIsDropdownOpen((prevState) => ({ ...prevState, [field]: false }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedData = {
      ...formData,
      details: formData.details.split("\n"),
      skills: formData.skills.split(",").map((skill) => skill.trim()),
      qualifications: formData.qualifications.split("\n"),
      benefits: formData.benefits.split("\n"),
      responsibilities: formData.responsibilities.split("\n"),
    };
    console.log("Form Data:", parsedData);
  };

  return (
    <>
      <Navbar />
      <div className="my-5 flex items-center justify-center">
        <h1 className="font-semibold text-4xl bg-blue-100 px-5 rounded-lg text-blue-700 animate-bounce">
          Post Job
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between px-4 md:px-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Add Job Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              {
                name: "title",
                label: "Job Title",
                placeholder: "Enter job title",
              },
              {
                name: "companyName",
                label: "Company Name",
                placeholder: "Enter company name",
              },
              {
                name: "rating",
                label: "Rating",
                placeholder: "Enter rating",
                type: "number",
              },
              {
                name: "respond",
                label: "Respond Time",
                placeholder: "Typically responds within 1 day",
              },
              {
                name: "salary",
                label: "Salary",
                placeholder: "Enter salary range",
              },
              {
                name: "duration",
                label: "Duration",
                placeholder: "Enter duration (e.g., Monday to Friday)",
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-lg font-medium text-blue-600 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            {["jobType", "location"].map((field) => (
              <div key={field} ref={(el) => (dropdownRefs.current[field] = el)} className="relative">
                <label className="block text-lg font-medium text-blue-600 mb-1">
                  {field === "jobType" ? "Job Type" : "Location"}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  onFocus={() => handleFocus(field)}
                  placeholder={
                    field === "jobType" ? "Select Job Type" : "Select Location"
                  }
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {isDropdownOpen[field] && (
                  <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 shadow-lg w-full">
                    {(field === "jobType" ? jobTypes : allLocations).map((option) => (
                      <div
                        key={option}
                        onClick={() => handleSelect(field, option)}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {["details", "skills", "qualifications", "benefits", "responsibilities"].map((field) => (
              <div key={field}>
                <label className="block text-lg font-medium text-blue-600 mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter ${field}, each item on a new line`}
                  rows={3}
                ></textarea>
              </div>
            ))}

            <div className="text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="w-full justify-center flex transform origin-left animate-slide-in-right">
          <img
            src={postJob}
            alt="Job Post"
            className="max-w-sm md:max-w-full rounded-lg object-full"
          />
        </div>
      </div>
    </>
  );
};

export default PostJob;

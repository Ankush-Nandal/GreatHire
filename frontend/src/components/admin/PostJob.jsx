import React, { useState, useRef, useEffect } from "react";
import Navbar from "../shared/Navbar";
import postJob from "../../image/postjob.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.auth || {});
  // check if user recuriter or not
  useEffect(() => {
    if (user.role === "recruiter") {
      navigate("/login");
    }
  }, [user]);

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    jobType: false,
    location: false,
  });
  const dropdownRefs = useRef({
    jobType: null,
    location: null,
    urgentHire: null,
  });
  const [skillInput, setSkillInput] = useState({ skill: "", required: false });

  const [formData, setFormData] = useState({
    urgentHiring:"",
    title: "",
    companyName: "",
    rating: "",
    location: "",
    respond: "",
    experience: "",
    salary: "",
    jobType: "",
    duration: "",
    details: "",
    skills: [],
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
    "Contract",
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

  const urgentHiring = ["Yes", "No"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSkillInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addSkill = () => {
    if (skillInput.skill.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, skillInput],
      }));
      setSkillInput({ skill: "", required: false });
    }
  };

  const removeSkill = (index) => {
    console.log(index);
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, i) => i !== index),
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
      qualifications: formData.qualifications.split("\n"),
      benefits: formData.benefits.split("\n"),
      responsibilities: formData.responsibilities.split("\n"),
    };
    console.log(parsedData);
    // Reset the formData to initial values
    setFormData({
      urgentHiring:"",
      title: "",
      companyName: "",
      rating: "",
      location: "",
      respond: "",
      experience: "",
      salary: "",
      jobType: "",
      duration: "",
      details: "",
      skills: [],
      qualifications: "",
      benefits: "",
      responsibilities: "",
    });

    // Optionally, reset the skill input as well
    setSkillInput({ skill: "", required: false });
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
          <h2 className="text-2xl font-bold mb-6 text-blue-700">
            Add Job Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Next 10 Fields in a Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "urgentHiring",
                  label: "Is Urgent Hiring",
                  placeholder: "Select",
                  dropdown: true,
                },
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
                  placeholder: "Enter salary range (e.g., 35000 to 40000)",
                },
                {
                  name: "duration",
                  label: "Duration",
                  placeholder: "Enter duration (e.g., Monday to Friday)",
                },
                {
                  name: "experience",
                  label: "Experience",
                  placeholder: "Enter experience (e.g., 1, 2 or fresher)",
                },
                
                {
                  name: "jobType",
                  label: "Job Type",
                  placeholder: "Select Job Type",
                  dropdown: true,
                },
                {
                  name: "location",
                  label: "Location",
                  placeholder: "Select Location",
                  dropdown: true,
                },
              ].map((field) => (
                <div
                  key={field.name}
                  ref={
                    field.dropdown
                      ? (el) => (dropdownRefs.current[field.name] = el)
                      : null
                  }
                >
                  <label className="block text-lg font-medium text-blue-600 mb-1">
                    {field.label}
                  </label>
                  {field.dropdown ? (
                    <div className="relative">
                      <input
                        type="text"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => handleFocus(field.name)}
                        placeholder={field.placeholder}
                        className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      {isDropdownOpen[field.name] && (
                        <div className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 shadow-lg w-full">
                          {(field.name === "jobType"
                            ? jobTypes
                            : field.name === "location"
                            ? allLocations
                            : urgentHiring
                          ).map((option) => (
                            <div
                              key={option}
                              onClick={() => handleSelect(field.name, option)}
                              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.placeholder}
                      required
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <label className="block text-lg font-medium text-blue-600 mb-1">
                Skills
              </label>
              <div className="flex items-center gap-4 mb-4">
                <input
                  type="text"
                  name="skill"
                  value={skillInput.skill}
                  onChange={handleSkillChange}
                  className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter skill"
                />
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="required"
                    checked={skillInput.required}
                    onChange={handleSkillChange}
                    className="h-4 w-4"
                  />
                  Required
                </label>
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Add
                </button>
              </div>
              <ul className="space-y-2">
                {formData.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
                  >
                    <span>
                      {skill.skill}{" "}
                      {skill.required && (
                        <span className="text-red-500">(Required)</span>
                      )}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Multi-line Text Areas */}
            {["details", "qualifications", "benefits", "responsibilities"].map(
              (field) => (
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
                    required
                  ></textarea>
                </div>
              )
            )}

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
              >
                Post Job
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

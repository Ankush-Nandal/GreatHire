import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import postJob from "../../image/postjob.png";

const PostJob = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
    // You can send `parsedData` to your backend or handle it as needed
  };

  return (
    <>
      <Navbar />
      <div className="my-5 flex items-center justify-center">
        <h1 className="font-semibold text-4xl bg-blue-100 px-5 rounded-lg text-blue-700 animate-bounce">
          Post Job
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row  max-w-7xl justify-between px-4 md:px-2 gap-6">
        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full ">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Add Job Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { name: "title", label: "Job Title", placeholder: "Enter job title" },
              { name: "companyName", label: "Company Name", placeholder: "Enter company name" },
              { name: "rating", label: "Rating", placeholder: "Enter rating", type: "number" },
              { name: "location", label: "Location", placeholder: "Enter location" },
              { name: "respond", label: "Respond Time", placeholder: "Typically responds within 1 day" },
              { name: "salary", label: "Salary", placeholder: "Enter salary range" },
              { name: "duration", label: "Duration", placeholder: "Enter duration (e.g., Monday to Friday)" },
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
            <div>
              <label className="block text-lg font-medium text-blue-600 mb-1">Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Job Type</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {[
              { name: "details", label: "Details", placeholder: "Enter details, each item on a new line" },
              { name: "skills", label: "Skills", placeholder: "Enter skills separated by commas" },
              { name: "qualifications", label: "Qualifications", placeholder: "Enter qualifications, each item on a new line" },
              { name: "benefits", label: "Benefits", placeholder: "Enter benefits, each item on a new line" },
              { name: "responsibilities", label: "Responsibilities", placeholder: "Enter responsibilities, each item on a new line" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-lg font-medium text-blue-600 mb-1">
                  {field.label}
                </label>
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={field.placeholder}
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

        {/* Image Section */}
        <div className="w-full justify-center flex transform origin-left animate-slide-in-right">
          <img
            src={postJob}
            alt="Job Post"
            className=" max-w-sm md:max-w-full rounded-lg object-full"
          />
        </div>
      </div>
    </>
  );
};

export default PostJob;

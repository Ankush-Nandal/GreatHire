import React, { useState } from "react";
import Navbar from "../shared/Navbar";

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
      <Navbar/>
      <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg p-6 mt-5">
        <h2 className="text-2xl font-bold mb-6">Add Job Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter job title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              step="0.1"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter rating"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Respond Time</label>
            <input
              type="text"
              name="respond"
              value={formData.respond}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="e.g., Typically responds within 1 day"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter salary range"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            >
              <option value="">Select Job Type</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Hybrid">Full Time</option>
              <option value="Hybrid">Part Time</option>
              <option value="Hybrid">Internship</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter duration (e.g., Monday to Friday)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter details, each item on a new line"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter skills separated by commas"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Qualifications</label>
            <textarea
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter qualifications, each item on a new line"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Benefits</label>
            <textarea
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter benefits, each item on a new line"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Responsibilities
            </label>
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter responsibilities, each item on a new line"
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostJob;

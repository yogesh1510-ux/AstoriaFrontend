import React, { useState } from "react";
import axios from "axios";
import banner4 from "../assets/Desktop/baneer-4.png";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/submit-lead`,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
        }
      );

      if (response.data.success) {
        console.log("✅ Form submitted successfully:", response.data.crm);
      } else {
        console.warn("⚠️ CRM rejected the lead:", response.data.crm);
        alert(`CRM error: ${response.data.crm.message}`);
      }
    } catch (error) {
      console.error(
        "Submission failed:",
        error.response?.data || error.message
      );

      if (error.response?.data?.crm?.message) {
        alert(`CRM error: ${error.response.data.crm.message}`);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 md:px-8 py-10 gap-8 items-stretch justify-between">
      <div className="w-full md:w-1/2 border-2 border-[#bb8c2e] p-6 flex flex-col justify-start">
        <h2 className="text-3xl md:text-4xl font-bold text-[#bb8c2e] leading-tight whitespace-pre-line mb-8">
          THE SUITE LIFE UPGRADE
          {"\n"}YOU'VE BEEN WAITING
          {"\n"}FOR IS HERE
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-md"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-white">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-transparent border border-gray-400 text-white px-4 py-2 rounded focus:outline-none focus:border-[#bb8c2e]"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-white">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-transparent border border-gray-400 text-white px-4 py-2 rounded focus:outline-none focus:border-[#bb8c2e]"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm text-white">
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-transparent border border-gray-400 text-white px-4 py-2 rounded focus:outline-none focus:border-[#bb8c2e]"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="w-60 mx-auto text-center">
            <button
              type="submit"
              className="bg-[#bb8c2e] text-white font-semibold py-2 px-6 rounded w-full"
            >
              Know More
            </button>

            <p className="text-xs text-gray-400 mt-2">
              *T&C Apply
              <br />
              <span>
                *Your privacy is very important to us; we will never share your
                information.
              </span>
            </p>
          </div>
        </form>
      </div>

      <div className="w-full md:w-1/2 h-full">
        <img
          src={banner4}
          alt="Astoria Royals"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Form;

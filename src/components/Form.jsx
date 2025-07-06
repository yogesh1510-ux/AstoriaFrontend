import React, { useState } from "react";
import axios from "axios";
import banner4 from "../assets/Desktop/baneer-4.png";
import toast from "react-hot-toast";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/submit-lead`,
        form
      );

      if (response.data.success) {
        toast.success("Lead submitted successfully!");
        setForm({ name: "", email: "", phone: "" });
      } else {
        const errorMessage =
          response.data.crm?.message || "CRM rejected the lead.";
        toast.error(
          <span className="block break-words max-w-sm">
            CRM error: {errorMessage}
          </span>
        );
      }
    } catch (error) {
      const crmData = error.response?.data?.crm || {};
      const errorMessage =
        crmData.status ||
        crmData.message ||
        error.response?.data?.detail ||
        "Something went wrong.";

      const msg = errorMessage.toLowerCase();

      if (msg.includes("already exists") && msg.includes("mobile")) {
        toast("You've already submitted this number.", { icon: "ℹ️" });
      } else if (msg.includes("already exists") && msg.includes("email")) {
        toast("This email is already registered.", { icon: "ℹ️" });
      } else if (msg.includes("mobile number required")) {
        toast("Please enter your mobile number.", { icon: "📱" });
      } else if (msg.includes("source required")) {
        toast("Source is missing. Please contact support.", { icon: "⚠️" });
      } else if (msg.includes("source does not exist")) {
        toast("Invalid source. Please contact support.", { icon: "⚠️" });
      } else if (msg.includes("source detail required")) {
        toast("Source detail is missing.", { icon: "⚠️" });
      } else if (msg.includes("source detail does not exist")) {
        toast("Invalid source detail. Please contact support.", { icon: "⚠️" });
      } else if (msg.includes("project name does not exist")) {
        toast("Project misconfiguration. Please try again later.", {
          icon: "🚫",
        });
      } else {
        toast("Something went wrong. Please try again.", {
          icon: "❌",
        });
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
          {["name", "email", "phone"].map((field) => (
            <div key={field} className="flex flex-col gap-1">
              <label htmlFor={field} className="text-sm text-white">
                {field.charAt(0).toUpperCase() + field.slice(1)}*
              </label>
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                id={field}
                name={field}
                required
                className="bg-transparent border border-gray-400 text-white px-4 py-2 rounded focus:outline-none focus:border-[#bb8c2e]"
                value={form[field]}
                onChange={handleChange}
              />
            </div>
          ))}

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

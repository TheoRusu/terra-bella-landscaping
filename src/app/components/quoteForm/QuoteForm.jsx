"use client";
import { sendQuote } from "@/app/api/actions";
import React, { useState, useRef } from "react";

const COOLDOWN_MS = 60000;

export default function QuoteForm() {
  const formRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function clearError(field) {
    if (errors[field]) {
      setErrors((prev) => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }
  }

  function handlePhoneChange(e) {
    clearError("phone");
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    const a = digits.slice(0, 3),
      b = digits.slice(3, 6),
      c = digits.slice(6, 10);
    setPhone(b ? `(${a}) ${b}${c ? `-${c}` : ""}` : a ? `(${a}` : "");
  }

  function handleChange(e) {
    clearError(e.target.name);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const last = parseInt(localStorage.getItem("lastQuoteTime") || "0", 10);
    const now = Date.now();
    if (now - last < COOLDOWN_MS) {
      const secs = Math.ceil((COOLDOWN_MS - (now - last)) / 1000);
      setErrors({ submit: `Try again in ${secs} seconds.` });
      return;
    }
    const form = formRef.current;
    const fd = new FormData(form);
    const errs = {};
    if (!fd.get("fullName")) errs.fullName = "Full Name is required";
    if (!fd.get("address")) errs.address = "Address is required";
    const email = fd.get("email") || "";
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Email format is invalid";
    const ph = fd.get("phone");
    if (!ph) errs.phone = "Phone Number is required";
    else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(ph))
      errs.phone = "Phone must match (###) ###-####";
    if (!fd.get("service")) errs.service = "Select a service";
    if (!fd.get("details")) errs.details = "Project details are required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    try {
      await sendQuote(fd);
      localStorage.setItem("lastQuoteTime", now.toString());
      setSuccess(true);
      form.reset();
      setPhone("");
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setErrors({ submit: "Failed to send quote." });
    }
  }

  function inputClass(field) {
    return `p-3 rounded w-full border ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Get a Free Quote</h2>
      {success && (
        <div
          className="bg-green-50 border border-green-400 text-green-800 px-4 py-3 rounded mb-6"
          role="alert"
        >
          <span className="font-semibold">Success:</span>
          <span className="ml-2">Your quote request has been sent.</span>
        </div>
      )}
      {errors.submit && (
        <div
          className="bg-red-50 border border-red-400 text-red-800 px-4 py-3 rounded mb-6"
          role="alert"
        >
          <span className="font-semibold">Error:</span>
          <span className="ml-2">{errors.submit}</span>
        </div>
      )}
      <form
        ref={formRef}
        className="grid gap-6"
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            className={inputClass("fullName")}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-600 mt-1">{errors.fullName}</p>
          )}
        </div>
        <div>
          <input
            name="address"
            type="text"
            placeholder="Address"
            className={inputClass("address")}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-red-600 mt-1">{errors.address}</p>
          )}
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className={inputClass("email")}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            name="phone"
            type="tel"
            placeholder="(###) ###-####"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={14}
            className={inputClass("phone")}
          />
          {errors.phone && <p className="text-red-600 mt-1">{errors.phone}</p>}
        </div>
        <div>
          <select
            name="service"
            defaultValue=""
            className={inputClass("service")}
            onChange={handleChange}
          >
            <option value="" disabled>
              Service Type
            </option>
            <option>Sodding</option>
            <option>Planting</option>
            <option>Interlocking</option>
            <option>Powerwashing</option>
            <option>Decks & Fences</option>
            <option>French Drainage</option>
          </select>
          {errors.service && (
            <p className="text-red-600 mt-1">{errors.service}</p>
          )}
        </div>
        <div>
          <textarea
            name="details"
            placeholder="Message / Project Details"
            className={inputClass("details") + " h-32"}
            onChange={handleChange}
          />
          {errors.details && (
            <p className="text-red-600 mt-1">{errors.details}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 cursor-pointer md:w-sm mx-auto"
        >
          Request Quote
        </button>
      </form>
    </div>
  );
}

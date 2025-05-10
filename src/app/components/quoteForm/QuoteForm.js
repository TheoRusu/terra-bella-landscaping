"use client";
import React, { useState } from "react";

const QuoteForm = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Get a Free Quote</h2>
      <form className="grid gap-6">
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="p-3 border border-gray-300 rounded"
        />{" "}
        <select className="p-3 border border-gray-300 rounded">
          <option disabled>Service Type</option>
          <option>Sodding</option>
          <option>Planting</option>
          <option>Interlocking</option>
          <option>Powerwashing</option>
          <option>Decks & Fences</option>
          <option>French Drainage</option>
        </select>
        <textarea
          placeholder="Message / Project Details"
          className="p-3 border border-gray-300 rounded h-32 md:col-span-1"
        />
      </form>
      <div className="text-center mt-8">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 cursor-pointer"
        >
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteForm;

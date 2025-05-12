// components/emailTemplate/EmailTemplate.jsx
import React from "react";

export default function EmailTemplate({
  fullName,
  address,
  email,
  phone,
  service,
  details,
}) {
  return (
    // ← you must return
    <div style={{ fontFamily: "sans‑serif", lineHeight: "1.5em" }}>
      <h1>New Quote Request</h1>
      <p>
        <strong>Name:</strong> {fullName}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Service:</strong> {service}
      </p>
      <p>
        <strong>Details:</strong>
        <br />
        {details}
      </p>
    </div>
  );
}

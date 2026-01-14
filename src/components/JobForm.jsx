import React, { useState } from "react";

const JobForm = ({ onAddJob }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddJob({
      id: crypto.randomUUID(),
      company,
      role,
      status: "Applied",
    });

    setCompany("");
    setRole("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          className="w-full border p-2"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="w-full border p-2"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2">Add Job</button>
      </form>
    </>
  );
};

export default JobForm;

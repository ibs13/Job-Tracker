import React, { useState } from "react";

const JobForm = ({ onAddJob, editingJob, onUpdateJob, onCancelEdit }) => {
  const [company, setCompany] = useState(editingJob?.company ?? "");
  const [role, setRole] = useState(editingJob?.role ?? "");
  const [status, setStatus] = useState(editingJob?.status ?? "Applied");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingJob) {
      onUpdateJob({
        ...editingJob,
        company,
        role,
        status,
      });
      onCancelEdit();
    } else {
      onAddJob({
        id: crypto.randomUUID(),
        company,
        role,
        status,
      });
    }

    setCompany("");
    setRole("");
    setStatus("Applied");
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
        <select
          className="w-full border p-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2">
          {editingJob ? "Update Job" : "Add Job"}
        </button>
      </form>
    </>
  );
};

export default JobForm;

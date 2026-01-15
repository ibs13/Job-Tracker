import { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import useJobs from "./hooks/useJobs";

const App = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingJob, setEditingJob] = useState(null);
  const { jobs, addJob, updateJob, deleteJob } = useJobs();
  const filteredJobs =
    statusFilter === "All"
      ? jobs
      : jobs.filter((job) => job.status === statusFilter);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold">Job Tracker</h1>
      <JobForm
        key={editingJob?.id ?? "new"}
        onAddJob={addJob}
        editingJob={editingJob}
        onUpdateJob={updateJob}
        onCancelEdit={() => setEditingJob(null)}
      />
      <select
        className="mb-4 border p-2"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option>All</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <JobList
        jobs={filteredJobs}
        onDeleteJob={deleteJob}
        onEditJob={setEditingJob}
      />
    </div>
  );
};

export default App;

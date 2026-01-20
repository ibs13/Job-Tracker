import { useMemo, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import useJobs from "./hooks/useJobs";

const App = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingJob, setEditingJob] = useState(null);
  const { jobs, addJob, updateJob, deleteJob } = useJobs();
  const filteredJobs = useMemo(() => {
    if (statusFilter === "All") return jobs;
    return jobs.filter((job) => job.status === statusFilter);
  }, [jobs, statusFilter]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
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
      </div>
    </div>
  );
};

export default App;

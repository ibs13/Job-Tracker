import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import useJobs from "./hooks/useJobs";

const App = () => {
  const { jobs, addJob, deleteJob } = useJobs();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold">Job Tracker</h1>
      <JobForm onAddJob={addJob} />
      <JobList jobs={jobs} onDeleteJob={deleteJob} />
    </div>
  );
};

export default App;

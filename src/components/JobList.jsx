import JobItem from "./JobItem";

const JobList = ({ jobs, onDeleteJob }) => {
  if (jobs.length === 0)
    return <p className="text-grey-500">No jobs added yet.</p>;
  return (
    <div>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} onDelete={onDeleteJob} />
      ))}
    </div>
  );
};

export default JobList;

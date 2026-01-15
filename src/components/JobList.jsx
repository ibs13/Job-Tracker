import JobItem from "./JobItem";

const JobList = ({ jobs, onDeleteJob, onEditJob }) => {
  if (jobs.length === 0)
    return <p className="text-grey-500">No jobs added yet.</p>;
  return (
    <div>
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          onDelete={onDeleteJob}
          onEdit={onEditJob}
        />
      ))}
    </div>
  );
};

export default JobList;

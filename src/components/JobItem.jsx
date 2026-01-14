const JobItem = ({ job, onDelete }) => {
  return (
    <div className="flex justify-between border p-3 rounded">
      <div>
        <p className="font-semibold">{job.company}</p>
        <p className="text-sm text-gray-600">{job.role}</p>
      </div>

      <button className="text-red-600 text-sm" onClick={() => onDelete(job.id)}>
        Delete
      </button>
    </div>
  );
};

export default JobItem;

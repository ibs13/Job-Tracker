const JobItem = ({ job, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between border p-3 rounded">
      <div>
        <p className="font-semibold">{job.company}</p>
        <p className="text-sm text-gray-600">{job.role}</p>
        <p className="text-sm mt-1">
          Status: <span className="font-medium">{job.status}</span>
        </p>
      </div>

      <button className="text-blue-600 text-sm" onClick={() => onEdit(job)}>
        Edit
      </button>

      <button className="text-red-600 text-sm" onClick={() => onDelete(job.id)}>
        Delete
      </button>
    </div>
  );
};

export default JobItem;

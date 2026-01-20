import StatusBadge from "./StatusBadge";
const JobItem = ({ job, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between border p-3 rounded">
      <div>
        <p className="font-semibold">{job.company}</p>
        <p className="text-sm text-gray-600">{job.role}</p>
        <StatusBadge status={job.status} />
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
